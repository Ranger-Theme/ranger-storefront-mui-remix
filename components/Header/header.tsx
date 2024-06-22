import { Link } from '@remix-run/react'
import { useSelector } from 'react-redux'

import { StyledHeader } from './styled'

const Header = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  console.info(storeConfig)

  return (
    <StyledHeader>
      <h3>Header</h3>
      <Link to="/">Home</Link>
    </StyledHeader>
  )
}

export default Header
