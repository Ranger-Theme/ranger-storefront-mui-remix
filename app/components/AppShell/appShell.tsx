import GlobalStyled from '../GlobalStyled'
import Header from '../Header'

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyled />
      <Header />
      {children}
    </>
  )
}

export default AppShell
