import styled from 'styled-components'

export const CartContainer = styled.div`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 13px;
  width: 800px;
  height: auto;
  min-height: 450px;
  border-radius: 25px;
  padding: 20px;
  background: rgba(212, 218, 238, 0.397);
  box-shadow: rgba(0, 0, 0, 0.404) -8px 8px 26px;
  margin: 21px auto;

  @media (max-width: 810px) {
    width: 90%;
  }
`
export const CartTitle = styled.p`
  font-family: 'Elliot Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  height: 35px;
  line-height: 24px;
  text-align: center;
  padding: 0px 20px;
  color: #ffffff;
  margin: 2px 0px;
  @media (max-width: 800px) { }
`

export const CartSubtitle = styled.p`
  font-family: 'Elliot Pro';
  font-style: normal;
  font-weight: 100;
  font-size: 20px;
  height: 400px;
  line-height: 24px;
  text-align: center;
  padding: 0px 20px;
  color: #ffffff;
  margin: 2px 0px;
  @media (max-width: 800px) { }
`
