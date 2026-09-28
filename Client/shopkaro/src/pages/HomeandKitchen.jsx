import React from 'react'
import Carouseal from '../components/Carouseal'
import FilterSortGrid from '../components/FilterSortGrid'
import { useEffect, useState } from 'react'


export default function HomeandKitchen() {
   // Dynamic poster-like images for Home & Kitchen from Unsplash
   let images=[
     "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&w=1920&q=80",
     "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&w=1920&q=80"
     ]
      
     const [data,setData]=useState([])
     const [loading, setLoading] = useState(true)
  
     async function getAllData(){
       try {
           const categories = ['home-decoration', 'furniture', 'lighting', 'groceries'];
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
 

     return(
      <div className="container">
          <Carouseal data={images} />
          <h1 className="page-title">Home & Kitchen Collection</h1>
          
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>Loading products...</div>
        ) : (
            <FilterSortGrid products={data} />
        )}
      </div>
     )
     
}
