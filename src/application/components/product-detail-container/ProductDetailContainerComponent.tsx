import * as S from './product-detail-container.styled'
import React from 'react'
import { IProductDto } from '@mod/product-detail/services/product.dto'

interface ProductDetailContainerProps {
  product: IProductDto;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const ProductDetailContainerComponent: React.FC<ProductDetailContainerProps> = ({ product, onClick }) => {
  return (
    <S.ProductDetailDiv>
      <S.ProductImage imageUrl={product.imageURL}/>
      <S.ProductDescriptionDiv>
        <S.ProductTitle>
          {product.name}
        </S.ProductTitle>
        <S.ProductCategory>
          {product.category}
        </S.ProductCategory>
        <S.ProductTitle>
          {'$' + product.price}
        </S.ProductTitle>
        <S.ProductSubTitle>
          {product.description}
        </S.ProductSubTitle>
        <S.ButtomContainer>
          <S.ProductButtom onClick={product.inStock ? onClick : undefined} isStock={product.inStock}>
            { product.inStock ? 'Añadir al carrito' : 'Fuera de stock :('}
          </S.ProductButtom>
        </S.ButtomContainer>
      </S.ProductDescriptionDiv>
    </S.ProductDetailDiv>
  )
}

export default ProductDetailContainerComponent
