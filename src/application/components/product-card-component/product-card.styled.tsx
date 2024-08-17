import styled from 'styled-components'

interface ProductCardProps {
  w?: string;
  h?: string;
}

export const CardContainer = styled.div<ProductCardProps>`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 13px;
  width: 350px;
  height: 570px;
  border-radius: 25px;
  background: rgba(212, 218, 238, 0.397);
  box-shadow: rgba(0, 0, 0, 0.404) -8px 8px 26px;
  margin: 24px auto;
`

interface CardImageProps {
  imageUrl: string;
}

export const CardImage = styled.div<CardImageProps>`
  width: 100%;
  height: 314px;
  border-radius: 0px 20px 0px 20px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`

export const CardTitle = styled.p`
  font-family: 'Elliot Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  height: 35px;
  line-height: 24px;
  text-align: center;
  padding: 0px 20px;
  color: #ffffff;
  margin: 2px 0px;
  @media (max-width: 800px) { }
`

export const CardDescription = styled.p`
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size:15px;
  height: 30px;
  text-align: center;
  line-height: 19.2px;
  color: aliceblue;
  padding: 0px 15px;
  @media (max-width: 800px) { }
`
interface ButtomCardProps {
  isStock: boolean;
}

export const CardButtom = styled.button<ButtomCardProps>`
  width: 100%;
  height: 70px;
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size:15px;
  background-color: ${(props) => props.isStock ? '#b581f1' : '#e73763'};
  border: none;
  border-radius: 0px 0px 20px 20px;

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
