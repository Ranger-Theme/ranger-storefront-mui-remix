import { PassThrough } from 'node:stream'
import { createReadableStreamFromReadable } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { isbot } from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import type { ReactElement } from 'react'
import type { EntryContext } from '@remix-run/node'

import { makeStore } from '@/store/store'
import { makeClient } from './apollo/client'
import MuiProvider from './mui/MuiProvider'

const ABORT_DELAY = 5_000

async function wrapRemixServerWithApollo(remixServer: ReactElement, request: Request) {
  const client = await makeClient(request)

  const app = <ApolloProvider client={client}>{remixServer}</ApolloProvider>

  await getDataFromTree(app)
  const initialState = client.extract()

  const appWithData = (
    <>
      {app}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')}` // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
        }}
      />
    </>
  )
  return appWithData
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get('user-agent')) ? 'onAllReady' : 'onShellReady'
  // const client = makeClient({
  //   headers: request.headers as never,
  //   credentials: request.credentials ?? 'include' // or "same-origin" if your backend server is the same domain
  // })
  const store = makeStore()

  return new Promise(async (resolve, reject) => {
    let shellRendered = false

    const { pipe, abort } = renderToPipeableStream(
      // <ApolloProvider client={client}>
      //   <Provider store={store}>
      //     <MuiProvider>
      //       <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
      //     </MuiProvider>
      //   </Provider>
      // </ApolloProvider>,
      await wrapRemixServerWithApollo(
        <Provider store={store}>
          <MuiProvider>
            <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
          </MuiProvider>
        </Provider>,
        request
      ),
      {
        [callbackName]: () => {
          shellRendered = true
          const body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = 500
          if (shellRendered) {
            console.error(error)
          }
        }
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
