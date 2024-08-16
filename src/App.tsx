// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import { AppLayout } from '@app/layouts/AppLayout'

// Vistas
import { HomeView } from '@mod/home/HomeView'

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
          </Routes>
        </AppLayout>
      </Router>
    </Container>
  )
}

export default App
