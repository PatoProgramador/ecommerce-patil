import React, { useState, useEffect } from 'react'
import { GeneralContainer } from '@app/components/general-container-component/general-container.styled'
import ProductCardComponent from '@app/components/product-card-component/ProductCardComponent'
import { IProductDto } from '@mod/product-detail/services/product.dto'
import { ProductService } from './services/get-products.service'
import * as S from './home-view.styled'

export const HomeView: React.FC<{}> = () => {
  const [apiProducts, setApiProducts] = useState<IProductDto[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProductDto[]>([])
  const [priceFilter, setPriceFilter] = useState<string>('')
  const [categoryFilter, setCategoryFilter] = useState<string>('')
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<string>('')

  useEffect(() => {
    const fetchData = () => {
      try {
        const products: IProductDto[] = ProductService.getProducts()
        setApiProducts(products)
        setFilteredProducts(products)
      } catch (err) {
        alert(err)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    let filtered = [...apiProducts]

    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter)
    }

    if (availabilityFilter) {
      filtered = filtered.filter(product => availabilityFilter === 'inStock' ? product.inStock : !product.inStock
      )
    }

    if (priceFilter) {
      filtered = filtered.sort((a, b) => {
        return priceFilter === 'asc' ? a.price - b.price : b.price - a.price
      })
    }

    if (sortOrder) {
      filtered = filtered.sort((a, b) => {
        if (sortOrder === 'az') {
          return a.name.localeCompare(b.name)
        } else if (sortOrder === 'dz') {
          return b.name.localeCompare(a.name)
        }
        return 0
      })
    }

    setFilteredProducts(filtered)
  }, [apiProducts, priceFilter, categoryFilter, availabilityFilter, sortOrder])

  return (
    <>
      <S.FilterContainer>
        <select
          name="precio"
          id="price-filter"
          onChange={(e) => {
            setPriceFilter(e.target.value)
          }}
        >
          <option value="">Por defecto</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
        <select
          name="categoria"
          id="category-filter"
          onChange={(e) => {
            setCategoryFilter(e.target.value)
          }}
        >
          <option value="">Todas las categorías</option>
          <option value="Laptops">Laptops</option>
          <option value="Monitores">Monitores</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Componentes">Componentes</option>
          <option value="Almacenamiento">Almacenamiento</option>
          <option value="Redes">Redes</option>
          <option value="Impresoras">Impresoras</option>
          <option value="Accesorios">Accesorios</option>
        </select>
        <select
          name="disponibilidad"
          id="availability-filter"
          onChange={(e) => {
            setAvailabilityFilter(e.target.value)
          }}
        >
          <option value="">Todos</option>
          <option value="inStock">En stock</option>
          <option value="outOfStock">Agotado</option>
        </select>
        <select
          name="ordenar"
          id="sort-filter"
          onChange={(e) => {
            setSortOrder(e.target.value)
          }}
        >
          <option value="">Por defecto</option>
          <option value="az">A - Z</option>
          <option value="dz">Z - A</option>
        </select>
      </S.FilterContainer>
      <GeneralContainer>
        {
          filteredProducts.map(product => (
            <ProductCardComponent key={product.id} product={product} ></ProductCardComponent>
          ))
        }
      </GeneralContainer>
    </>
  )
}
