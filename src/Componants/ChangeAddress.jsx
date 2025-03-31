import React, { useState } from 'react'

function ChangeAddress({setmodelopen,setAddress}) {
    const [data,setdata]=useState();
    const handlesetaddress=()=>{
        setAddress(data);
        setmodelopen(false);
    }
   

  return (
    <div className='justify-center items-center '>
        <input onChange={(e)=>setdata(e.target.value)} type='text' name="address" placeholder='Enter the New Address' className='border  p-2 w-full mb-4'/>
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' onClick={()=>setmodelopen(false)}> Cancel</button>
            <button className='bg-gray-500 text-white py-2 px-4 rounded ' onClick={handlesetaddress}>Save Address</button>
        </div>
      
    </div>
  )
}

export default ChangeAddress

