import Logo from '@/components/Logo'
import MegaMenu from '@/components/MegaMenu'

const Header = () => {
  return (
    <header className="sticky bg-white border-b border-gray-300 h-auto top-0 z-40">
      <Logo />
      <MegaMenu />
    </header>
  )
}

export default Header
