import React from 'react'
import { GeneralContainer } from '@app/components/general-container-component/general-container.styled'
import ProductCardComponent from '@app/components/product-card-component/ProductCardComponent'
import { IProductDto } from '@mod/product-detail/services/product.dto'

export const HomeView: React.FC<{}> = () => {
  // const [apiProducts, setApiProducts] = useState('')

  const exProduct: IProductDto = {
    id: 1,
    name: 'Producto A',
    description: 'Descripción del Producto A',
    price: 29.99,
    category: 'Electrónica',
    inStock: false,
    imageURL: 'https://www.mipcparquecentral.com/cdn/shop/files/pcgamercolombia_70e323cd-7909-43bb-bfc5-449cdec19a21.png?v=1709663633'
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = ''

  //       setApiProducts(res)
  //     } catch (err) {
  //       // console.error(err)
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <GeneralContainer>
      <ProductCardComponent product={exProduct} ></ProductCardComponent>
    </GeneralContainer>
  )
}
