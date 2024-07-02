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
    <nav className="bg-[#f0f0f0]">
      {menuList.length > 0 && (
        <ul className="w-full max-w-screen-xl mx-auto grid grid-flow-col justify-start gap-x-5">
          {menuList.map((menu) => {
            const { url_path, name, children } = menu
            return (
              <StyledMenuItem key={url_path}>
                <Link to={`/${url_path}${suffix}`} title={name}>
                  <span dangerouslySetInnerHTML={{ __html: name }} />
                </Link>
                {children.length > 0 && (
                  <ul className="submenu">
                    {children.map((submenu: any) => {
                      return (
                        <li key={submenu.url_path}>
                          <Link to={`/${submenu.url_path}${suffix}`} title={submenu.name}>
                            <span dangerouslySetInnerHTML={{ __html: submenu.name }} />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </StyledMenuItem>
            )
          })}
        </ul>
      )}
    </nav>
  )
}

export default MegaMenu
