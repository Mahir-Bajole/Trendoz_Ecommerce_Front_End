import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-black mt-120'>
    <div className='w-full mt-80 bg-black flex justify-between px-20 justify-center gap-20 items-center'>
    <div className='w-50 flex mt-5 flex-col gap-10'>
      <h1 className='text-2xl font-bold text-white'>TrenDoz</h1>
      <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores doloremque iste porro officiis minima.</p>
  </div>

    <div  className='w-50 flex text-white flex-col gap-10' >
     <h1 className='text-2xl font-bold text-white'>Quick Links</h1>
     <div className='flex flex-col text-xl gap-3'>
      <Link className='font-semibold' to="/">Home</Link>
      <Link className='font-semibold' to="/shop">Shop</Link>
      <Link className='font-semibold' to="/about">About us</Link>
      <Link className='font-semibold' to="/contact">Contact us</Link>
      </div>

      
      </div>
      <div  className='w-50 flex mb-12 text-white flex-col gap-10'>
        <h1 className='text-2xl  font-bold text-white'>Follow Us</h1>
        <div className='flex gap-5 text-white'>
        <FaFacebook className='text-2xl' />
        <FaLinkedin className='text-2xl'/>
        <FaInstagram className='text-2xl' />
        <FaTwitter className='text-2xl' />

        </div>
        <div className='text-white flex gap-2'>
        
          <input className='outline-none border h-10 rounded-2xl p-1' placeholder='Email' type='email'/>
          <button className='bg-red-500 p-1 rounded-2xl'>Subscribe</button>

  
        </div>
       
        
      
      </div>
     
    </div>
    <div className='mx-70 justify-between flex mb-1 mt-10'>
    <p className='text-zinc-300'>&copy; 2024 TrenDoz All Right Reserved</p>
     <div className='text-zinc-300'>
       <a href="">Privacy Policy</a>
       <a href="">terms And Condition</a>
     </div>

    </div>
    
     </div>
  )
}

export default Footer
