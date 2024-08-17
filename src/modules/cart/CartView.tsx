import React from 'react'
import * as S from './cart-view.styled'
import { ProductService } from '@mod/home/services/get-products.service'
import ProductCartComponent from '@app/components/product-cart-component/ProductCartComponent'

export const CartView: React.FC<{}> = () => {
  const products = ProductService.getProducts()

  return (
    <>
      <S.CartContainer>
        <S.CartTitle>
          Tu carrito
        </S.CartTitle>
        {
          products.map((product) => (
            <ProductCartComponent key={product.id} product={product}></ProductCartComponent>
          ))
        }
      </S.CartContainer>
    </>
  )
}
