import {  } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'




 const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     <Route path="/" element={<Home/>} />
     <Route path='/products/:id' element={<Products/>} />
     <Route path='/cart' element={<Cart/>}/>

    </BrowserRouter>
    

    
  )
}

export default App