import React from 'react'
import Carouseal from '../components/Carouseal'

export default function Home() {

  let images=["https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/bac6e385f3bd157c.jpeg?q=60",
                "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6204fe0e1d4cd758.jpeg?q=60",
                "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/b2acdfecca8c1ec6.jpeg?q=60",
                "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/2746152f289ef43c.jpg?q=60",
                "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/843b04f435158cc3.jpg?q=60"]

  return (
    <div className="container">
      <Carouseal data={images}/>
      <h1 className="page-title">Welcome to Shopkaro</h1>
    </div>
  )
}
