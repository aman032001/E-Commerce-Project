import React from 'react'
import {Routes,Route} from  "react-router-dom"
import Home from '../pages/Home'
import Mens from "../pages/Mens"
import Womens from "../pages/Womens"
import Kids from "../pages/Kids"
import HomeandKitchen from "../pages/HomeandKitchen"
import Toys from "../pages/Toys"
import Footwear from "../pages/Footwear"

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

    </Routes>
  )
}
