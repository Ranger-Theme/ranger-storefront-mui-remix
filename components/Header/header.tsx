import { Link } from '@remix-run/react'
import { useSelector } from 'react-redux'

import { StyledHeader } from './styled'

const Header = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig)

  return (
    <StyledHeader>
      <h3>Header</h3>
      <Link to="/">Home</Link>
      <p>{storeConfig?.code ?? ''}</p>
    </StyledHeader>
  )
}

export default Header
