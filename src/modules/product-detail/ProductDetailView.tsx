import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProductDto } from './services/product.dto'
import { ProductService } from '@mod/home/services/get-products.service'
import ProductDetailContainerComponent from '@app/components/product-detail-container/ProductDetailContainerComponent'
import { useCartContext } from '@mod/home/services/CartContext'

export const ProductDetailView: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProductDto>()

  const { cartData, updateCartData } = useCartContext()

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

  const handleAddToCartClick = (product: IProductDto) => {
    if (product.inStock) {
      const isProductInCart = cartData.products.some(cartProduct => cartProduct.id === product.id)
      if (isProductInCart) {
        alert('El producto ya está en tu carrito.')
      } else {
        updateCartData({ products: [...cartData.products, product] })
        alert('Se añadió el producto a tu carrito :)')
      }
    } else {
      alert('Producto agotado :(')
    }
  }

  return (
    <ProductDetailContainerComponent onClick={() => handleAddToCartClick(product)} product={product}/>
  )
}

export default ProductDetailView
