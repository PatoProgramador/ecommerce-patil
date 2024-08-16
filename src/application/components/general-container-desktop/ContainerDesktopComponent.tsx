import React, { ReactNode } from 'react'
import * as S from './container-desktop.styled'

interface ContainerDesktopProps {
  children: ReactNode;
}

const ContainerDesktopComponent: React.FC<ContainerDesktopProps> = ({ children }) => {
  return (
    <S.ContainerDesktop>
      {children}
    </S.ContainerDesktop>
  )
}

export default ContainerDesktopComponent
