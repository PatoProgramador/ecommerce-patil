import React, { ReactNode } from 'react'
import * as S from './general-container.styled'

interface GeneralContainerProps {
  children: ReactNode;
}

const GeneralContainerComponent: React.FC<GeneralContainerProps> = ({ children }) => {
  return (
    <S.GeneralContainer>
      {children}
    </S.GeneralContainer>
  )
}

export default GeneralContainerComponent
