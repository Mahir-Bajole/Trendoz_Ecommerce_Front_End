import React from 'react'

import { FaTruck } from 'react-icons/fa';


function Infocard({icon,title,desc}) {
  return (
    <div className='hover:scale-110 p-2 w-70 h-50 flex flex-col shadow-2xl justify-center text-center items-center rounded-2xl '>
      
      <div>{icon}</div>
       
            <h1 className='text-2xl font-bold my-5'>{title}</h1>
            <p className='font-semibold'>{desc}</p>
      
       

      
      
    </div>
  )
}

export default Infocard

