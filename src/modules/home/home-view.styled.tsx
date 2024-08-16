import styled from 'styled-components'

interface FilterContainerProps {
  w?: string;
  h?: string;
}

export const FilterContainer = styled.div<FilterContainerProps>`
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    -webkit-box-align: center;
    padding: 32px 16px;
    gap: 10px;
    width: ${(props) => props.w || 'auto'};
    height: ${(props) => props.h || 'auto'};
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 95%;
      padding: 24px 20px;
    }

    @media (max-width: 480px) {
      width: 90%;
      padding: 16px 10px;
    }
`
