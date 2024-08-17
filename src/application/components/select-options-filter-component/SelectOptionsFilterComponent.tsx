import * as S from './select-options-filter.styled'
import React from 'react'
import { IOption } from '@mod/home/model/option.model'

interface SelectOptionsProps {
  title: string;
  options: IOption[];
  idSelect: string;
  nameSelect: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptionsFilterComponent: React.FC<SelectOptionsProps> = ({ title, options, idSelect, nameSelect, onChange }) => {
  return (
    <S.SelectDiv>
      <S.SelectTitle>
          {title}
      </S.SelectTitle>
      <S.SelectOptionsContainer name={nameSelect} id={idSelect} onChange={onChange}>
        { options.map(option => (
          <option key={option.key} value={option.key}>{option.description}</option>
        )) }
      </S.SelectOptionsContainer>
    </S.SelectDiv>
  )
}

export default SelectOptionsFilterComponent
