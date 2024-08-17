import styled from 'styled-components'

export const ProductCartContainer = styled.div`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 220px;
  border-radius: 25px;
  background: rgba(212, 218, 238, 0.397);
  box-shadow: rgba(0, 0, 0, 0.404) -8px 8px 26px;
  margin: 24px auto;

  @media (max-width: 810px) {
    margin: 0;
  }
`

interface CartImageProps {
  imageUrl: string;
}

export const ProductCartImage = styled.div<CartImageProps>`
  width: 300px;
  height: 100%;
  border-radius: 0px 20px 0px 20px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
    
  @media (max-width: 810px) {
    display: none;
  }

`
export const ProductCartDescriptionContainer = styled.div`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 600px;
  height: 200px;
  padding: 20px 10px;
  margin: 24px auto;
  @media (max-width: 810px) {
    width: 100%;
  }
`
export const ProductCartDescriptionTitle = styled.p`
  font-family: 'Elliot Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  height: 30px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
`

export const ProductCartSubtitle = styled.p`
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size: 20px;
  height: 20px;
  line-height: 24px;
  margin: 0;
  color: aliceblue;

  @media (max-width: 700px) {
    padding: 0px;
  }

  @media (max-width: 505px) {
    padding: 0px;
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    padding: 0px;
  }
`

export const ProductCartFinalSectionDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  margin-top: auto;
`

export const ProductPrice = styled.p`
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size: 20px;
  height: 10px;
  line-height: 24px;
  color: aliceblue;

  @media (max-width: 700px) {
    padding: 0px;
  }

  @media (max-width: 505px) {
    padding: 0px;
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    text-align: center;
    padding: 0px;
  }
`

export const CartDeleteButtom = styled.button`
  width: 70%;
  height: 60px;
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size:15px;
  margin-right: 10px;
  background-color: #e73763;
  border: none;
  border-radius: 20px;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background-color: #f34e4e;
    color: #FFFFFF;
  }

  &:active {
    cursor: pointer;
    background-color: #e7a137;
    color: #FFFFFF;
  }
`
