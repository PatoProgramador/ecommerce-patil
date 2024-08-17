import React from 'react'
import * as S from './cart-view.styled'
import ProductCartComponent from '@app/components/product-cart-component/ProductCartComponent'
import { useCartContext } from '@mod/home/services/CartContext'

export const CartView: React.FC<{}> = () => {
  const { cartData, removeProductFromCart } = useCartContext()

  const handleRemoveClick = (productId: number) => {
    removeProductFromCart(productId)
    alert('Eliminado del carrito ;)')
  }

  return (
    <>
      <S.CartContainer>
        <S.CartTitle>
          Tu carrito
        </S.CartTitle>
        {
          cartData.products.length > 0
            ? cartData.products.map((product) => (
              <ProductCartComponent key={product.id} product={product} onClick={() => handleRemoveClick(product.id)}></ProductCartComponent>
            ))
            : <S.CartSubtitle>Aun no hay productos en tu carrito</S.CartSubtitle>
        }
      </S.CartContainer>
    </>
  )
}
