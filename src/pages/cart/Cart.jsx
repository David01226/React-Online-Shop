import React, { useContext } from 'react'
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/ShopContextProvider"
import { CartItem } from "./CartItem"
import { useNavigate } from "react-router-dom"

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
        <div className="cartItems">
          {PRODUCTS.map((product, index) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={index} data={product} />
            }
          })}
        </div>

      {totalAmount > 0 ? 
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      : 
        <h1>Your cart is empty</h1>
      }

      </div>
    </div>
  )
}
