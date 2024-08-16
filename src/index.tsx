import React from 'react'

// Legacy
// import ReactDOM from 'react-dom'

// Current Version
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { AppMainTheme } from '@app/themes/app.main-theme'
import CssBaseline from '@mui/material/CssBaseline'
import '@app/themes/main.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CartProvider } from '@mod/home/services/CartContext'

// Legacy
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// Current Version
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <CartProvider>
    <ThemeProvider theme={AppMainTheme}>
      <CssBaseline/>
       <App />
    </ThemeProvider>
    </CartProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
