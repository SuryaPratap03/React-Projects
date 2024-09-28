import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home/index'
import Favorites from './pages/favorites/index'
import Details from './pages/details/index'
import GlobalState from './context/index'

const FoodRecipeApp = () => {
  return (
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      <GlobalState>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/recipe-item/:id' element={<Details/>}/>
      </Routes>
      </GlobalState>
    </div>
  )
}

export default FoodRecipeApp