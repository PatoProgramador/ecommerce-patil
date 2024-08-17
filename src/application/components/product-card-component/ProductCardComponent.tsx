import { IProductDto } from '@mod/product-detail/services/product.dto'
import * as S from './product-card.styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ProductCardProps {
  product: IProductDto;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/product/${product.id}`)
  }
  return (
      <S.CardContainer>
        <S.CardImage onClick={handleOnClick} imageUrl={product.imageURL}/>
        <S.CardTitle>
          {product.name}
        </S.CardTitle>
        <S.CardDescription>
          {product.description}
        </S.CardDescription>
        <S.CardTitle>
          {'$' + product.price}
        </S.CardTitle>
        <S.CardButtom onClick={product.inStock ? onClick : undefined} isStock={product.inStock}>
          { product.inStock ? 'Añadir al carrito' : 'Fuera de stock :('}
        </S.CardButtom>
      </S.CardContainer>
  )
}

export default ProductCardComponent
