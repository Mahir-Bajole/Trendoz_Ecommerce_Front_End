import React from 'react'
import Card from './Card'
import mockdata from '../assets/Mockdata'
import { setProduct } from '../Redux/ProductSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'

function Cards() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    useEffect(()=>{
      dispatch(setProduct(mockdata));
    },[]);
   
  return (
    <div className='mb-90'>
    <h1 className='text-4xl text-center mt-5 bg-red-500 mx-19 rounded-4xl p-2 text-white font-bold'>Top Products</h1>
    <div className='flex mt-10 rounded-4xl mx-30 h-screen flex-wrap gap-5'>
      
          {
            products.map((product, index) => (
              <Card key={index} product={product}/>
            ))
          }
      
    </div>
    </div>
  )
}

export default Cards
