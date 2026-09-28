import React from 'react'
import Carouseal from '../components/Carouseal'
import FilterSortGrid from '../components/FilterSortGrid'
import { useState, useEffect } from 'react'

export default function Toys() {
   // Dynamic poster-like images for Toys from Unsplash
   let images=[
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&w=1920&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&w=1920&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&w=1920&q=80"
     ]

     const [data,setData]=useState([])
     const [loading, setLoading] = useState(true)
  
     async function getAllData(){
       try {
           // Fetch a large random assortment to simulate a big toy catalog
           let response = await fetch("https://dummyjson.com/products?limit=30&skip=50") 
           let actualdata = await response.json()
           setData(actualdata.products || [])
       } catch (error) {
           console.error("Failed to fetch data:", error);
       } finally {
           setLoading(false)
       }
      }
  
      useEffect(()=>{
       getAllData()
      },[])

    return (
      <div className="container">
          <Carouseal data={images} />
          <h1 className="page-title">Toys Collection</h1>
          
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>Loading products...</div>
        ) : (
            <FilterSortGrid products={data} />
        )}
      </div>
    )
}
