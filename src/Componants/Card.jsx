import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { addTOCart } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Card({product}) {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    
    dispatch(addTOCart(product));
    
   
    alert("Product added to cart");
  };
  
  
  return (
    <Link to={`/product/${product.id}`} className='w-60 hover:scale-105 shadow-2xl p-5 py-10 rounded mt-5'>
   
     <img  className='w-full h-2/3 object-cover ' src={product.image} alt={product.name} />
     <div className='p-2'>
     <h1 className='text-2xl font-semibold  '>{product.name}</h1>
     <h1 className='text-xl mt-2'>${product.price}</h1>

     <div className='mt-4 flex  items-center  justify-between px-1'>
        <div className='flex text-2xl'>
     <FaStar className='text-yellow-500'/>
     <FaStar className='text-yellow-500'/>
     <FaStar className='text-yellow-500'/>
     <FaStar className='text-zinc-300'/>
     </div>


    <div className="group flex flex-col items-center space-y-2 p-4 relative">
  <IoMdAdd 
    className="bg-red-500 group-hover:opacity-0 text-3xl rounded-full p-1 transition-opacity duration-500 ease-in-out" 
  />
  

  {/* Hidden cart button with absolute positioning */}
  <button onClick={(e)=>handleAddToCart(e,product)}
    className="bg-green-500 w-20 text-white rounded-lg   absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500 ease-in-out"
  >
    Add to Cart
  </button>
</div>




     </div>

   
     </div>
     
    </Link>
  )
}

export default Card
