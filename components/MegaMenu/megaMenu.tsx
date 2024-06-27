import { Link } from '@remix-run/react'
import { useQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import { sortBy } from 'lodash-es'

import { GET_MEGA_MENU } from '@/graphql/queries/getMegaMenu'
import { StyledMenuItem } from './styled'

const MegaMenu = () => {
  const { data } = useQuery<any>(GET_MEGA_MENU)
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const menuList: any[] = sortBy(data?.menus?.[0]?.children ?? [], 'position')
  const suffix: string = storeConfig?.category_url_suffix ?? ''

  return (
    <>
      {menuList.length > 0 && (
        <nav className="lg:flex col-end-10 col-start-3 flex-grow justify-self-center">
          {menuList.map((menu) => {
            const { url_path, name } = menu
            return (
              <StyledMenuItem key={url_path} className="px-3 py-0">
                <Link
                  className="items-center inline-flex"
                  to={`/${url_path}${suffix}`}
                  title={name}>
                  <span dangerouslySetInnerHTML={{ __html: name }} />
                </Link>
              </StyledMenuItem>
            )
          })}
        </nav>
      )}
    </>
  )
}

export default MegaMenu
