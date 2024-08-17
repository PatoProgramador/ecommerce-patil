import React, { useState, useEffect } from 'react'
import { GeneralContainer } from '@app/components/general-container-component/general-container.styled'
import ProductCardComponent from '@app/components/product-card-component/ProductCardComponent'
import { IProductDto } from '@mod/product-detail/services/product.dto'
import { ProductService } from './services/get-products.service'
import { FilterSection } from './sections/FilterSection'

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

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>, filterType: string) => {
    const value = event.target.value
    switch (filterType) {
      case 'category':
        setCategoryFilter(value)
        break
      case 'availability':
        setAvailabilityFilter(value)
        break
      case 'price':
        setPriceFilter(value)
        break
      case 'sortOrder':
        setSortOrder(value)
        break
      default:
        break
    }
  }

  return (
    <>
      <FilterSection handleChange={handleFilterChange}/>
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
