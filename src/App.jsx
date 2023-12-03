import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from "./components/Menu"
import { CartProvider } from './Data/CartContext'

import { CardProvider } from './Data/CardContext'
import About from './components/About'
import Contact from './components/Contact'
import Checkout from './components/Checkout'

const App = () => {
  return (
    
      <Router>
        <CartProvider>
        <CardProvider>
      <Navbar/>
     
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/checkout' element={<Checkout/>}/>
</Routes>

</CardProvider>
</CartProvider>  
  
  </Router>
  )
}

export default App
