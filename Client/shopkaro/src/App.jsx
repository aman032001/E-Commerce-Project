import React from 'react'
import Navbar from './components/Navbar'
import Allroutes from './components/Allroutes'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar/>
      <div style={{ flex: 1 }}>
        <Allroutes/>
      </div>
      <Footer/>
      <Toast />
    </div>
  )
}

