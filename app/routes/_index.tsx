// import { Link } from '@remix-run/react'
// import { Button } from '@mui/material'
// import type { MetaFunction } from '@remix-run/node'

// export const meta: MetaFunction = () => {
//   return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
// }

// export default function Index() {
//   return (
//     <div className="font-sans p-4">
//       <h1 className="text-3xl">Welcome to Remix</h1>
//       <Button variant="contained">
//         <span>Remix</span>
//       </Button>
//       <div>
//         <Link to="/login">Login</Link>
//       </div>
//     </div>
//   )
// }
import { useQuery } from '@apollo/client'
import { GET_STORE_CONFIG } from '@/graphql/queries/getStoreConfig'

export default function Index() {
  const { data } = useQuery(GET_STORE_CONFIG)

  return <div>{JSON.stringify(data)}</div>
}
