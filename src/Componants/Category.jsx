import React from 'react'

function Category({title,image}) {
  return (
    <div className='flex w-[30%] hover:scale-110 gap-10 items-center justify-center text-center w-100 h-70 rounded-2xl p-2 bg-red-300'>
    <div>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <h1 className='font-semibold text-xl text-zinc-500'>View All</h1>
    </div>
    <div>
      <img className='w-42 h-52 object-cover' src={image} alt="Image description" />
    </div>
  </div>
  
  )
}

export default Category
