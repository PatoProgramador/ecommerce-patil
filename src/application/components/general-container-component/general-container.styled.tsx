import styled from 'styled-components'

interface GeneralContainerProps {
  w?: string;
  h?: string;
}

export const GeneralContainer = styled.div<GeneralContainerProps>`
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -webkit-box-align: center;
    padding: 32px 16px;
    gap: 10px;
    width: ${(props) => props.w || 'auto'};
    height: ${(props) => props.h || 'auto'};
    margin: 0 auto;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr 1fr;
      padding: 24px 20px;
    }

    @media (max-width: 650px) {
      width: 95%;
      grid-template-columns: 1fr;
      padding: 24px 20px;
    }

    @media (max-width: 480px) {
      width: 90%;
      grid-template-columns: 1fr;
      padding: 16px 10px;
    }
`
