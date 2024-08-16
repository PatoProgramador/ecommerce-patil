import React, { useState, useEffect } from 'react'
import { GeneralContainer } from '@app/components/general-container-component/general-container.styled'
import ProductCardComponent from '@app/components/product-card-component/ProductCardComponent'
import { IProductDto } from '@mod/product-detail/services/product.dto'
import { ProductService } from './services/get-products.service'

export const HomeView: React.FC<{}> = () => {
  const [apiProducts, setApiProducts] = useState<IProductDto[]>([])

  useEffect(() => {
    const fetchData = () => {
      try {
        const products: IProductDto[] = ProductService.getProducts()
        setApiProducts(products)
      } catch (err) {
        alert(err)
      }
    }

    fetchData()
  }, [])

  return (
    <GeneralContainer>
      {
        apiProducts.map(product => (
          <ProductCardComponent key={product.id} product={product} ></ProductCardComponent>
        ))
      }
    </GeneralContainer>
  )
}
