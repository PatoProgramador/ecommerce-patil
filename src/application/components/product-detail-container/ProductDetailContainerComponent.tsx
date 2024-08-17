import * as S from './product-detail-container.styled'
import React from 'react'
import { IProductDto } from '@mod/product-detail/services/product.dto'

interface ProductDetailContainerProps {
  product: IProductDto;
}

const ProductDetailContainerComponent: React.FC<ProductDetailContainerProps> = ({ product }) => {
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
          <S.ProductButtom isStock={product.inStock}>
            { product.inStock ? 'Añadir al carrito' : 'Fuera de stock :('}
          </S.ProductButtom>
        </S.ButtomContainer>
      </S.ProductDescriptionDiv>
    </S.ProductDetailDiv>
  )
}

export default ProductDetailContainerComponent
