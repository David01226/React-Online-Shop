import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBar } from "./components/NavBar"
import { Cart } from "./pages/cart/Cart";
import { Shop } from "./pages/shop/Shop";
import { ShopContextProvider } from "./context/ShopContextProvider";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
