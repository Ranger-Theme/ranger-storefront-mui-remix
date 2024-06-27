import { Link } from '@remix-run/react'
import { useSelector } from 'react-redux'

const Logo = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const src: string = storeConfig?.logo_src
    ? `${storeConfig.secure_base_media_url}logo/${storeConfig.logo_src}`
    : '/logo.svg'
  const width: number = storeConfig?.logo_width ? storeConfig.logo_width : 148
  const height: number = storeConfig?.logo_height ? storeConfig.logo_height : 43
  const alt: string = storeConfig?.logo_alt ? storeConfig.logo_alt : 'Luma'

  return (
    <Link to="/" title={alt}>
      <img src={src} alt={alt} width={width} height={height} />
    </Link>
  )
}

export default Logo
