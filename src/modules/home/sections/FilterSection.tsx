import React from 'react'
import * as S from './filter-section.styled'
import SelectOptionsFilterComponent from '@app/components/select-options-filter-component/SelectOptionsFilterComponent'
import { IOption } from '../model/option.model'

interface FilterSectionProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>, filterType: string) => void
}

export const FilterSection: React.FC<FilterSectionProps> = ({ handleChange }) => {
  const priceOptions: IOption[] = [
    {
      key: '',
      description: 'Por defecto'
    },
    {
      key: 'asc',
      description: 'Menor a mayor'
    },
    {
      key: 'desc',
      description: 'Mayor a menor'
    }
  ]

  const categoryOptions: IOption[] = [
    {
      key: '',
      description: 'Todas las categorías'
    },
    {
      key: 'Laptops',
      description: 'Laptops'
    },
    {
      key: 'Monitores',
      description: 'Monitores'
    },
    {
      key: 'Periféricos',
      description: 'Periféricos'
    },
    {
      key: 'Componentes',
      description: 'Componentes'
    },
    {
      key: 'Almacenamiento',
      description: 'Almacenamiento'
    },
    {
      key: 'Redes',
      description: 'Redes'
    },
    {
      key: 'Impresoras',
      description: 'Impresoras'
    },
    {
      key: 'Accesorios',
      description: 'Accesorios'
    }
  ]

  const availabilityOptions: IOption[] = [
    {
      key: '',
      description: 'Todos'
    },
    {
      key: 'inStock',
      description: 'En stock'
    },
    {
      key: 'outOfStock',
      description: 'Agotado'
    }
  ]

  const sortOrderOptions: IOption[] = [
    {
      key: '',
      description: 'Por defecto'
    },
    {
      key: 'az',
      description: 'A - Z'
    },
    {
      key: 'dz',
      description: 'Z - A'
    }
  ]

  return (
    <S.FilterContainer>
        <SelectOptionsFilterComponent
          title='Filtrar por precio:'
          options={priceOptions}
          idSelect='price-filter'
          nameSelect='precio'
          onChange={(e) => { handleChange(e, 'price') }}
        />
        <SelectOptionsFilterComponent
          title='Filtrar por categoria:'
          options={categoryOptions}
          idSelect='category-filter'
          nameSelect='categoria'
          onChange={(e) => { handleChange(e, 'category') }}
        />
        <SelectOptionsFilterComponent
          title='Filtrar por stock:'
          options={availabilityOptions}
          idSelect='availability-filter'
          nameSelect='disponibilidad'
          onChange={(e) => { handleChange(e, 'availability') }}
        />
        <SelectOptionsFilterComponent
          title='Ordenar:'
          options={sortOrderOptions}
          idSelect='order-filter'
          nameSelect='ordernar'
          onChange={(e) => { handleChange(e, 'sortOrder') }}
        />
    </S.FilterContainer>
  )
}
