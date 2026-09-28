import React from 'react'
import Carouseal from '../components/Carouseal'

export default function Kids() {
  let images=[
              "https://cdn.fcglcdn.com/brainbees/banners/994x3991765360755604.webp",
              "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_prim_6_flat4542_desktop1765367393784.webp",
              "https://cdn.fcglcdn.com/brainbees/banners/desktop_exluv151764143662891.webp",
              "https://cdn.fcglcdn.com/brainbees/banners/dp1765260575781.webp",
              "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_flash_9_big_desktop1764926965308.webp"
    ]
   return (
     <div>
               <Carouseal data={images} />
               <h1>Kids Page</h1>
 
     </div>
  )
}
