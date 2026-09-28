import React from 'react'
import Carouseal from '../components/Carouseal'

export default function Toys() {
   let images=[
      "https://st-images.honasa.in/1920_512_Generic_GIF_9f1fff6239.gif?width=&qualilty=",
      "https://st-images.honasa.in/Desktop_9a4cce1c9f.jpg?format=auto&width=&qualilty=",
      "https://st-images.honasa.in/1920_512_Generic_GIF_9f1fff6239.gif?width=&qualilty=",
      "https://st-images.honasa.in/Desktop_9a4cce1c9f.jpg?format=auto&width=&qualilty=",
      "https://st-images.honasa.in/1920_512_Generic_GIF_9f1fff6239.gif?width=&qualilty="
     ]
    return (
      <div>
                <Carouseal data={images} />
                <h1>Toys page</h1>
  
      </div>
    )
}
