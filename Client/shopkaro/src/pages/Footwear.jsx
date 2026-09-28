import React from 'react'
import Carouseal from '../components/Carouseal'
import FilterSortGrid from '../components/FilterSortGrid'
import { useState, useEffect } from 'react'

export default function Footwear() {
  // Dynamic poster-like images for Footwear from Unsplash
  let images=[
     "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&w=1920&q=80"
    ]
    
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true)
 
    async function getAllData(){
      try {
          const categories = ['mens-shoes', 'womens-shoes'];
          const responses = await Promise.all(categories.map(c => fetch(`https://dummyjson.com/products/category/${c}`)));
          const dataArrays = await Promise.all(responses.map(res => res.json()));
          
          const allProducts = dataArrays.flatMap(d => d.products || []);
          setData(allProducts)
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
          <h1 className="page-title">Footwear Collection</h1>
          
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>Loading products...</div>
        ) : (
            <FilterSortGrid products={data} />
        )}
     </div>
  )
}
