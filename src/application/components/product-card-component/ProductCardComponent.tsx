import { IProductDto } from '@mod/product-detail/services/product.dto'
import * as S from './product-card.styled'
import React from 'react'

interface ProductCardProps {
  product: IProductDto;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product }) => {
  return (
      <S.CardContainer>
        <S.CardImage imageUrl={product.imageURL}/>
        <S.CardTitle>
          {product.name}
        </S.CardTitle>
        <S.CardDescription>
          {product.description}
        </S.CardDescription>
        <S.CardTitle>
          {'$' + product.price}
        </S.CardTitle>
        <S.CardButtom isStock={product.inStock}>
          { product.inStock ? 'Añadir al carrito' : 'Fuera de stock :('}
        </S.CardButtom>
      </S.CardContainer>
  )
}

export default ProductCardComponent
