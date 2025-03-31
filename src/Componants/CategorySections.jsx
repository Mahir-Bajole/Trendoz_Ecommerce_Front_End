import React from 'react'
import Category from './Category'

function CategorySections() {
    const datacat=[{title:"Men",image:'./src/assets/Men.png'},{title:"Women",image:'./src/assets/women.png'},{title:"Kid",image:'./src/assets/kid.png'}]
  return (
    <div className='flex gap-10 ml-20 mx-10'>
        {
            datacat.map((item,index)=>(
                <Category key={index} title={item.title} image={item.image}/>
            ))
        }
      
    </div>
  )
}

export default CategorySections
