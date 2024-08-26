import React, { useContext } from 'react'
import { ShopContext } from "../../context/ShopContextProvider"


export const CartItem = ({ data }) => {
  const { id, productName, price, productImage} = data
  const { addToCart, removeFromCart, updateCartItemCount, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p>${price}</p>
      </div>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}> - </button>
        <input type="text" value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  )
}
