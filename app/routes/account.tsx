import { Link, Outlet, useLocation } from '@remix-run/react'
import { clsx } from 'clsx'

const Account = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation()

  const menus: Array<any> = [
    { href: '/account', title: 'Account Dashbard' },
    { href: '/account/information', title: 'Account Information' },
    { href: '/account/address', title: 'Account Address' },
    { href: '/account/newsletter', title: 'Account Newsletter' },
    { href: '/account/orders', title: 'Account Orders' },
    { href: '/account/reviews', title: 'Account Reviews' },
    { href: '/account/wishlist', title: 'Account Wishlist' }
  ]

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-wrap justify-between items-start">
        {menus.length > 0 && (
          <ul className="basis-2/12 p-4 border rounded-md">
            {menus.map((menu) => {
              const { href, title } = menu
              return (
                <li
                  key={href}
                  className={clsx({
                    link: true,
                    active: pathname === href
                  })}>
                  <Link to={href} title={title}>
                    <span>{title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
        <div className="basis-9/12">
          {children}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Account
