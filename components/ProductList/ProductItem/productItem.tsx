import { Link } from '@remix-run/react'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { CiHeart } from 'react-icons/ci'

import { StyledAction } from './styled'

const ProductItem = ({ product }: any) => {
  const { url_key, name, small_image } = product
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const suffix: string = storeConfig?.product_url_suffix ?? ''

  return (
    <div className="grid gap-y-2 content-start">
      <Link className="grid" to={`/${url_key}${suffix}`} title={name}>
        <img src={small_image.url} alt={small_image.label} width={350} height={350} />
      </Link>
      <Link className="font-semibold text-colorDefault" to={`/${url_key}${suffix}`} title={name}>
        <span dangerouslySetInnerHTML={{ __html: name }} />
      </Link>
      <StyledAction>
        <Button variant="contained">
          <span>Add To Cart</span>
        </Button>
        <CiHeart size={28} />
      </StyledAction>
    </div>
  )
}

export default ProductItem
