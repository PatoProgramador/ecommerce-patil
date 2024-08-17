import { IProductDto } from '@mod/product-detail/services/product.dto'
import * as S from './product-cart.styled'
import React from 'react'

interface ProductCartProps {
  product: IProductDto;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const ProductCartComponent: React.FC<ProductCartProps> = ({ product, onClick }) => {
  return (
      <S.ProductCartContainer>
        <S.ProductCartImage imageUrl={product.imageURL}/>
        <S.ProductCartDescriptionContainer>
          <S.ProductCartDescriptionTitle>
            {product.name}
          </S.ProductCartDescriptionTitle>
          <S.ProductCartSubtitle>
            {product.description}
          </S.ProductCartSubtitle>
          <S.ProductCartFinalSectionDiv>
            <S.ProductPrice>
              {'+' + '$' + product.price}
            </S.ProductPrice>
            <S.CartDeleteButtom onClick={onClick}>
              Quitar del carrito
            </S.CartDeleteButtom>
          </S.ProductCartFinalSectionDiv>
        </S.ProductCartDescriptionContainer>
      </S.ProductCartContainer>
  )
}

export default ProductCartComponent
