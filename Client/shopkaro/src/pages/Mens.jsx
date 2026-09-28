import React from 'react'
import Carouseal from '../components/Carouseal'
import FilterSortGrid from '../components/FilterSortGrid'
import { useState, useEffect } from 'react'

export default function Mens() {
   // Dynamic poster-like images for Mens Fashion from Unsplash
   let images = [
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&w=1920&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&w=1920&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&w=1920&q=80"
   ]

    const [mendata,setmendata]=useState([])
    const [loading, setLoading] = useState(true)

    async function getAllmensdata(){
      try {
          const categories = ['mens-shirts', 'mens-shoes', 'mens-watches'];
          const responses = await Promise.all(categories.map(c => fetch(`https://dummyjson.com/products/category/${c}`)));
          const dataArrays = await Promise.all(responses.map(res => res.json()));
          
          const allProducts = dataArrays.flatMap(data => data.products || []);
          setmendata(allProducts)
      } catch (error) {
          console.error("Failed to fetch mens data:", error);
      } finally {
          setLoading(false)
      }
     }

     useEffect(()=>{
      getAllmensdata()
     },[])
    
    return (
      <div className="container">
          <Carouseal data={images} />
          
          <h1 className="page-title">Men's Collection</h1>
          
          {loading ? (
              <div style={{ textAlign: "center", padding: "4rem 0" }}>Loading products...</div>
          ) : (
              <FilterSortGrid products={mendata} />
          )}
      </div>
  )
}
