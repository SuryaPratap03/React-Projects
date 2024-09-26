import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Details from './components/Details'
import { FoodRecipeContextProvider } from './components/context/FoodRecipeContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/:id' element={<Details/>}></Route>
    </Routes>
    </>
  )
}

export default App
