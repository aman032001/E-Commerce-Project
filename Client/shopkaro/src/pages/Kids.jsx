import React from 'react'
import Carouseal from '../components/Carouseal'
import FilterSortGrid from '../components/FilterSortGrid'
import { useState, useEffect } from 'react'

export default function Kids() {
  // Dynamic poster-like images for Kids from Unsplash
  let images=[
     "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1514090227943-7f3113941865?auto=format&w=1920&q=80"
    ]
    
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true)
 
    async function getAllData(){
      try {
          // DummyJSON doesn't have a direct "kids" category with many items, so we combine a few relevant ones
          const categories = ['tops', 'sunglasses', 'sports-accessories'];
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
         <h1 className="page-title">Kids Collection</h1>
         
         {loading ? (
             <div style={{ textAlign: "center", padding: "4rem 0" }}>Loading products...</div>
         ) : (
             <FilterSortGrid products={data} />
         )}
     </div>
  )
}
