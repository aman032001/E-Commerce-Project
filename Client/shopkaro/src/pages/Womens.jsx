import React from 'react'
import Carouseal from '../components/Carouseal'
import FilterSortGrid from '../components/FilterSortGrid'
import { useState, useEffect } from 'react'

export default function Womens() {
   // Dynamic poster-like images for Womens Fashion from Unsplash
   let images=[
     "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&w=1920&q=80"
    ]
 
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true)
 
    async function getAllData(){
      try {
          const categories = ['womens-dresses', 'womens-shoes', 'womens-watches', 'womens-bags', 'womens-jewellery', 'tops'];
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
         <h1 className="page-title">Women's Collection</h1>
         
         {loading ? (
             <div style={{ textAlign: "center", padding: "4rem 0" }}>Loading products...</div>
         ) : (
             <FilterSortGrid products={data} />
         )}
     </div>
   )
 }
