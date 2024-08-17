import { IProductDto } from '@mod/product-detail/services/product.dto'
import React, { createContext, useContext, useState } from 'react'

// Define the shape of your registration data
interface CartData {
  products: IProductDto[];
}

// Define the shape of your context value
interface CartContextValue {
  cartData: CartData;
  updateCartData: (data: CartData) => void;
  removeProductFromCart: (productId: number) => void;
}

// Create the context
export const CartContext = createContext<CartContextValue>({
  cartData: { products: [] },
  updateCartData: () => {},
  removeProductFromCart: () => {}
})

// Define a custom hook to access the context value
export const useCartContext = () => useContext(CartContext)

// Define the provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartData, setCartData] = useState<CartData>({
    products: []
  })

  const updateCartData = (data: CartData) => {
    setCartData(data)
  }

  const removeProductFromCart = (productId: number) => {
    const updatedProducts = cartData.products.filter(product => product.id !== productId)
    setCartData({ products: updatedProducts })
  }

  return (
    <CartContext.Provider value={{ cartData, updateCartData, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
