import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProductDto } from './services/product.dto'
import { ProductService } from '@mod/home/services/get-products.service'
import ProductDetailContainerComponent from '@app/components/product-detail-container/ProductDetailContainerComponent'

export const ProductDetailView: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProductDto>()

  useEffect(() => {
    const fetchData = () => {
      try {
        const apiProduct: IProductDto = ProductService.getProductById(Number(id))

        if (apiProduct) {
          setProduct(apiProduct)
        }
      } catch (err) {
        alert(err)
      }
    }

    fetchData()
  }, [id])

  if (!product) {
    return <div>Producto no encontrado :(</div>
  }

  return (
    <ProductDetailContainerComponent product={product}/>
  )
}

export default ProductDetailView
