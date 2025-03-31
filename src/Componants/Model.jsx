import React, { Children } from 'react'
import ChangeAddress from './ChangeAddress'

function Model({ismodelopen,setmodelopen,children}) {
    if(!ismodelopen)return null
  return (
    <div className='fixed inset-0 bg-gray-800 opacity-80 flex justify-center items-center items-center z-50'>
        <div className='bg-white rounded-lg opacity-100 shadow-lg p-6 w-full max-w-md'>
            <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={()=>setmodelopen(false)}>&times;</button>
            {children}
           
        </div>
      
    </div>
  )
}

export default Model
