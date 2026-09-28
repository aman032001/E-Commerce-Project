import React from 'react'
import Carouseal from '../components/Carouseal'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

export default function Mens() {
   let images=[
      "https://apisap.fabindia.com/medias/hp-sec1-06dec25-04.jpg?context=bWFzdGVyfGltYWdlc3wzMDkyNzd8aW1hZ2UvanBlZ3xhRGszTDJnMU1DOHhNelE1TkRZNU56Y3dOVFEzTlRBdmFIQXRjMlZqTVMwd05tUmxZekkxTFRBMExtcHdad3wxZDJhMTk4MTJhMzg4MTY4ODRjMjRmMzhhNTIzZWM0MmEzOWY4ZDBiMTJhNTQ5ODNkMzQwNmU1MWZkMGUyMGQ4",
      "https://apisap.fabindia.com/medias/hp-sec1-06dec25-05.jpg?context=bWFzdGVyfGltYWdlc3w0NTUyMjR8aW1hZ2UvanBlZ3xhREF3TDJnMU5DOHhNelE1TkRZNU56Y3hOVE13TlRRdmFIQXRjMlZqTVMwd05tUmxZekkxTFRBMUxtcHdad3w1MjYyYWE1MjZkNzM1NWJlOTkzZjAyNzY3Yzc0MzRiYTZiYWU0ZWM5MjU1YmMxN2M2M2JkN2M5MDEzNzRmZDI4",
      "https://apisap.fabindia.com/medias/hp-sec1-06dec25-04.jpg?context=bWFzdGVyfGltYWdlc3wzMDkyNzd8aW1hZ2UvanBlZ3xhRGszTDJnMU1DOHhNelE1TkRZNU56Y3dOVFEzTlRBdmFIQXRjMlZqTVMwd05tUmxZekkxTFRBMExtcHdad3wxZDJhMTk4MTJhMzg4MTY4ODRjMjRmMzhhNTIzZWM0MmEzOWY4ZDBiMTJhNTQ5ODNkMzQwNmU1MWZkMGUyMGQ4",
      "https://apisap.fabindia.com/medias/hp-sec1-06dec25-02.jpg?context=bWFzdGVyfGltYWdlc3w0MjU4Njl8aW1hZ2UvanBlZ3xhRGRtTDJneU1DOHhNelE1TkRZM09UZzNNekV5T1RRdmFIQXRjMlZqTVMwd05tUmxZekkxTFRBeUxtcHdad3wzM2ZmZmIyNTAzYWI1ZTkzMGRlYmIyZTk1ZWFmMGRhMTA5NGZhYmNkNTkwZTZjZGY4MTEwNjQ1MDRlNGQ0NDFh",
      "https://apisap.fabindia.com/medias/hp-sec1-05dec25-01-v1.jpg?context=bWFzdGVyfGltYWdlc3w1NjY1NDR8aW1hZ2UvanBlZ3xhRGMzTDJnNE5DOHhNelE0TkRZMU16QXdOakF6TVRndmFIQXRjMlZqTVMwd05XUmxZekkxTFRBeExYWXhMbXB3Wnd8MTE0MzJjZTIwZjM0MjU2NGE0MmI1MDlmMzBiNmQ0MmY2ZTcxZDNhZTlhZDBiNjQ4NzZkMTU4ZGE3MzM2NDNkYw"
     ]

     
    const [mendata,setmendata]=useState([])
    const [loading, setLoading] = useState(true)

    async function getAllmensdata(){
      try {
          let data = await fetch("http://localhost:3000/mens")
          let actualdata = await data.json()
          setmendata(actualdata)
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
              <div className="product-grid">
                  {mendata.length > 0 ? (
                      mendata.map((el, i) => (
                          <Card data1={el} key={i}/>
                      ))
                  ) : (
                      <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}>
                          No products available at the moment.
                      </div>
                  )}
              </div>
          )}
      </div>
  )
}
