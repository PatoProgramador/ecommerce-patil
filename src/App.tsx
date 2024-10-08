// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import { AppLayout } from '@app/layouts/AppLayout'

// Vistas
import { HomeView } from '@mod/home/HomeView'
import ProductDetailView from '@mod/product-detail/ProductDetailView'
import { CartView } from '@mod/cart/CartView'

function App () {
  return (
    <Container
      sx={{
        '&.MuiContainer-root': {
          paddingLeft: '0 ',
          paddingRight: '0 ',
          minHeight: '100vh'
        }
      }}
      maxWidth={false}
    >
      <Router basename='/'>
        <AppLayout>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/product/:id' element={<ProductDetailView />}/>
            <Route path='/cart' element={<CartView />} />
          </Routes>
        </AppLayout>
      </Router>
    </Container>
  )
}

export default App
