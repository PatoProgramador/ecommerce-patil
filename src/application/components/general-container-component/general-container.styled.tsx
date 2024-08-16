import styled from 'styled-components'

interface GeneralContainerProps {
  w?: string;
  h?: string;
}

export const GeneralContainer = styled.div<GeneralContainerProps>`
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 32px 16px;
    gap: 10px;
    width: ${(props) => props.w || 'auto'};
    height: ${(props) => props.h || 'auto'};
    margin: 24px;

    @media (max-width: 768px) {
      width: 95%;
      padding: 24px 20px;
    }

    @media (max-width: 480px) {
      width: 90%;
      padding: 16px 10px;
    }

    //@media (min-width: 769px) {
      //width: 100%;
      //max-width: 1100px; /* Mantiene un ancho máximo */
      //margin: 24px auto;
     // padding: 32px 5%; 
    //}
`
