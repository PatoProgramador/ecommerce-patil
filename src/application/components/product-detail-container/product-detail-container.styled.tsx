import styled from 'styled-components'

export const ProductDetailDiv = styled.div`
    width: auto;
    height: auto;
    margin: 30px 30px;
    display: flex;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      padding: 24px 20px;
    }
`

interface ProductImageProps {
  imageUrl: string;
}

export const ProductImage = styled.div<ProductImageProps>`
  width: 100%;
  height: 600px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;

  @media (max-width: 1200px) {
    height: 400px;
  }
`
export const ProductDescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 20px 0px;

  @media (max-width: 1200px) {
    
  }
`

export const ProductTitle = styled.p`
  font-family: 'Elliot Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  width: 100%;
  height: 35px;
  line-height: 30px;
  padding: 0px 40px;
  color: #ffffff;
  margin: 2px 0px;
  @media (max-width: 700px) {
    font-size: 24px;
    padding: 0px;
    text-align: center;
  }

  @media (max-width: 505px) {
    font-size: 18px;
    padding: 0px;
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    padding: 0px;
    text-align: center;
  }
`

export const ProductCategory = styled.p`
  font-family: 'Elliot Pro';
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  width: 100%;
  height: 35px;
  line-height: 20px;
  padding: 0px 40px;
  color: #ffffff;
  margin: 2px 0px;
  @media (max-width: 700px) {
    padding: 0px;
    text-align: center;
  }

  @media (max-width: 505px) {
    padding: 0px;
    text-align: center;
  }
`

export const ProductSubTitle = styled.p`
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size: 20px;
  height: 20px;
  padding: 0px 40px;
  line-height: 40px;
  color: aliceblue;
  @media (max-width: 700px) {
    padding: 0px;
    text-align: center;
  }

  @media (max-width: 505px) {
    padding: 0px;
    text-align: center;
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    padding: 0px;
    text-align: center;
  }
`

export const ButtomContainer = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  margin-top: 70px;
  justify-content: center;
`

interface ButtomProductProps {
  isStock: boolean;
}

export const ProductButtom = styled.button<ButtomProductProps>`
  width: 100%;
  height: 70px;
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size:20px;
  background-color: ${(props) => props.isStock ? '#b581f1' : '#e73763'};
  border: none;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.isStock ? 'rgb(208, 44, 197)' : '#f34e4e'};
    color: #FFFFFF;
  }

  &:active {
    cursor: pointer;
    background-color: ${(props) => props.isStock ? '#f71fda' : '#e7a137'};
    color: #FFFFFF;
  }
`
