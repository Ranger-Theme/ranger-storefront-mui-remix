import { Link } from '@remix-run/react'

import { StyledHeader } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <h3>Header</h3>
      <Link to="/">Home</Link>
    </StyledHeader>
  )
}

export default Header
