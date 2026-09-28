import React from 'react'
import {Routes,Route} from  "react-router-dom"
import Home from '../pages/Home'
import Mens from "../pages/Mens"
import Womens from "../pages/Womens"
import Kids from "../pages/Kids"
import HomeandKitchen from "../pages/HomeandKitchen"
import Toys from "../pages/Toys"
import Footwear from "../pages/Footwear"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import ProductDetails from "../pages/ProductDetails"
import Search from "../pages/Search"
import Wishlist from "../pages/Wishlist"
import Checkout from "../pages/Checkout"
import Success from "../pages/Success"
import Profile from "../pages/Profile"

export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/womens" element={<Womens/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/homeandkitchen" element={<HomeandKitchen/>} />
        <Route path="/toys" element={<Toys/>} />
        <Route path="/footwear" element={<Footwear/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
  )
}
