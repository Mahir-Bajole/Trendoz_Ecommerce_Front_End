import React, { useEffect } from 'react'
import NavBar from '../Componants/NavBar'
import Filter from '../Componants/Filter'
import Informationsections from '../Componants/Informationsections'
import CategorySections from '../Componants/CategorySections'

import Cards from '../Componants/Cards'
import Shop from '../Componants/Shop'
import Footer from '../Componants/Footer'



function Home() {
 
  


  return (
    <div className='w-full h-screen'>
      
    
    <div className='flex flex-col lg:flex-row  w-full '>
      <Filter/>
      <div className='lg:w-[80%] h-[80%] bg-red-300'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob29waW5nfGVufDB8fDB8fHww'/>
        <h1 className='absolute top-100 left-100 text-5xl font-bold mb-5'>Welcome to TrenDoz</h1>
        <h1 className='absolute top-115 left-100 text-2xl font-semibold'>Millions + Products</h1>
        <button className='absolute top-125 text-xl font-semibold hover:bg-green-400 left-100 bg-red-500 p-2 rounded-2xl'>Shop Now</button>
      </div>
    </div>
    <Informationsections/>
    <CategorySections/>
  
    <Cards/>
    <Shop/>
    <Footer/>
   
  </div>
  
    
    
  )
}

export default Home
