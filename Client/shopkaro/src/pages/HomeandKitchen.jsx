import React from 'react'
import Carouseal from '../components/Carouseal'
import { useEffect, useState,useRef } from 'react'


export default function HomeandKitchen() {
   let images=[
     "https://www.thinkitchen.in/cdn/shop/files/Banner_2_1920x650_b0f5dcc4-f82c-4178-a481-54dd00da1d0d.jpg?v=1764678253",
     "https://www.thinkitchen.in/cdn/shop/files/Banner_1920x650__3.jpg?v=1764678152",
     "https://www.thinkitchen.in/cdn/shop/files/Banner_CB_1920x650_63223f9d-3e48-433f-b34c-c952f18d3a85.jpg?v=1765197848",
     "https://www.thinkitchen.in/cdn/shop/files/Banner_2_1920x650_b0f5dcc4-f82c-4178-a481-54dd00da1d0d.jpg?v=1764678253",
     "https://www.thinkitchen.in/cdn/shop/files/Banner_1920x650__3.jpg?v=1764678152"
     ]
      
     return(

      <div>
                    
                    <Carouseal data={images} />
                    <h1>H&K page</h1>
      
      </div>
     )
     
    }
     
   

