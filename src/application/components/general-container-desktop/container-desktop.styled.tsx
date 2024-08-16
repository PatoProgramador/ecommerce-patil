import styled from 'styled-components'

interface ContainerDesktopProps {
  w?: string;
  h?: string;
}

export const ContainerDesktop = styled.div<ContainerDesktopProps>`
  width: 100%;
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    width: 348px;
    margin: auto;
    padding: 0;
    gap: 10px;
  }
`
