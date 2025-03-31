import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';
import Model from './Model';
import { setsearchterm } from '../Redux/ProductSlice';
import { useNavigate } from 'react-router-dom';

function NavBar() {
   const product = useSelector(state => state.carts .products);
   const [ismodelop,setmodelop]=useState(false);
   const [islogin,setlogin]=useState(true);
   const [search,setsearch]=useState();
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const handlesearch=(e)=>{
        e.preventDefault();
        dispatch(setsearchterm(search));
        setsearch('');
        navigate('/search');
    }
    

  return (
    <nav className='h-[10%] lg:w-full h-[17%]  mx-auto shadow-md py-1 px-1'>
        <div className='flex mx-5 lg:mx-30 gap-5 text-center items-center    '>
            <div className=' w-10 lg:w-15 h-15 flex items-center'>
                <Link to='/'><img className='rounded-full ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kEqYPGl2EHeI0aenlYDkbbNp_N9nBXIgJw&s'/></Link>
            </div>
            <form onSubmit={handlesearch} className=' w-full flex items-center bg-zinc-200 rounded px-2 ' >
                <input  value={search} onChange={(e)=>setsearch(e.target.value)}  className='bg-zinc-200 rounded outline-none h-5 lg:h-13 w-full p-1' placeholder='Search product' type='text'/>
                <IoIosSearch className='bg-zinc-200 lg:text-4xl' />
                
            </form>
            <div>
  <Link to='/cart'>
  {product && product.length > 0 && (
      <span className='w-5 h-5 ml-6 bg-red-600 rounded-full text-white text-xs flex justify-center items-center'>
        {product.length}
      </span>
    )}
    <FaShoppingCart className='w-10 h-7' />
   
  </Link>
</div>

            <button onClick={()=> setmodelop(true)} className='  hidden lg:block w-35 flex  gap-1'>
                <h1>Login | Register</h1>
               
            </button>

            <button className='block lg:hidden'>
            <FaRegUser />
            </button>


        </div>
        <div className=' lg:text-xl font-semibold flex gap-10 justify-center mt-5'>
            <Link to={"/"} >Home</Link>
            <Link to={"/shop"} >Shop</Link>
            <Link to={"/contact"} >Contact</Link>
            <Link to={"/about"} >About</Link>
        </div>
        <Model ismodelopen={ismodelop} setmodelopen={setmodelop} >
{
  islogin? <Login/>:<Register/>
}

        </Model>
    </nav>
  )
}

export default NavBar
