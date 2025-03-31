import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'

function Filter() {
  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    'Shoes',
    'Accessories (Bags, Belts, Hats, etc.)',
  ];

  return (
    <div className='lg:w-[20%] h-203 bg-zinc-100 flex flex-col p-4'>
      <div >
        <h1 className='text-xl text-white font-semibold bg-red-500 p-2 rounded-2xl justify-center flex mb-5'>Categories</h1>
        {categories.map((category, index) => (
          <Link to={`/${category}`} key={index} className='flex items-center py-2'>
            <span className='w-2 h-2 flex items-center justify-center shadow-lg bg-red-500 rounded-full mr-4'>
            </span>
            <span className='text-lg'>{category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Filter;
