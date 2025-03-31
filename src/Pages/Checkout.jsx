import React, { useState } from 'react'
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Checkout({setorder,order}) {
    const navigate=useNavigate();
    const carts =useSelector(state=>state.carts)
    const [billingtoggle,setbillingtoggle]=useState(true)
    const [shippingtoggle,setshippingtoggle]=useState(true)
    const [paymenttoggle,setpaymenttoggle]=useState(true)
    const [paymentmethod,setpaymentmethod]=useState("cod");
    const [shippinginfo,setshippinginfo]=useState({
        address:"",city:" ",zip:""
    })
    const placeordermethod=()=>{
        const neworder={
            products:carts.products,
            ordernumber:"1234",
            shipinginfo:shippinginfo,
            totalprice:carts.total
        }
        setorder(neworder);
        
        
        navigate("/setorderconfirm");
    }



  return (
    <div className=' px-4 py-2'>
       <div className='text-3xl font-bold px-10 py-10'><h1>CHECKOUT</h1></div>
       <div className='flex'>
     <div className='px-10 py-5 gap-6  flex flex-col w-1/2'>
        <div onClick={()=>setbillingtoggle(!billingtoggle)} className='flex items-center border-b py-1  justify-between'>
            <h1 className='text-2xl '>Billing Information</h1>
            {billingtoggle ?<MdKeyboardArrowDown />:<MdKeyboardArrowUp />}

        </div>
        <div className={`flex flex-col mb-5 ${billingtoggle?"":"hidden"} mt-10 gap-5`}>
    {/* Name */}
    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>Name</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the Name' 
            type='text' 
        />
    </div>
    
    {/* Email */}
    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>Email</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the Email' 
            type='email' 
        />
    </div>
    
    {/* Phone */}
    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>Phone</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the Phone' 
            type='number' 
        />
    </div>
</div>
<div onClick={()=>setshippingtoggle(!shippingtoggle)} className='flex items-center border-b py-1  justify-between'>
            <h1 className='text-2xl '>Shipping Information</h1>
            {shippingtoggle ?<MdKeyboardArrowDown />:<MdKeyboardArrowUp />}

        </div>

        <div className={`flex flex-col mb-10 ${shippingtoggle?"":"hidden"} mt-10 gap-5`}>
  
    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>Address</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the Name' 
            type='text' onChange={(e)=>setshippinginfo({...shippinginfo,address:e.target.value})}
        />
    </div>
    

    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>City</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the Email' 
            type='email' onChange={(e)=>setshippinginfo({...shippinginfo,city:e.target.value})}
        />
    </div>
    
   
    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>Zip code</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the Phone' onChange={(e)=>setshippinginfo({...shippinginfo,zip:e.target.value})}
            type='text' 
        />
    </div>
</div>

<div onClick={()=>setpaymenttoggle(!paymenttoggle)} className='flex items-center border-b py-1  justify-between'>
            <h1 className='text-2xl '>Payment Method</h1>
            {paymenttoggle ?<MdKeyboardArrowDown />:<MdKeyboardArrowUp />}

        </div>

        <div className={`flex flex-col mb-6 ${paymenttoggle?"":"hidden"} mt-10 gap-5`}>
  
  <div className='flex gap-6 items-center'>
  <input checked={paymentmethod==="cod"} onChange={()=> setpaymentmethod("cod")}
          className=' font-semibold border rounded-2xl  h-10' 
         
          type='radio' 
      />
      <label className='text-xl font-semibold w-1/4'>Cash on Delivery</label>
      
  </div>

  <div className='flex gap-6 items-center'>
  <input checked={paymentmethod==="dc"} onChange={()=> setpaymentmethod("dc")}
          className=' font-semibold border rounded-2xl  h-10' 
         
          type='radio' 
      />
      <label className='text-xl font-semibold w-1/4'>Debit Card</label>
      
  </div>

  {
    paymentmethod==="dc" &&
    <div className='  shadow-2xl rounded-2xl items-center'>
         <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>card Number</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the card Number' 
            type='number' 
        />
    </div>

    <div className='flex gap-6 items-center '>
        <label className='text-2xl font-semibold w-1/4'>card holder Name</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the User' 
            type='text' 
        />
    </div>

    <div className='flex  gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>Expiry Date</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the card Number' 
            type='date' 
        />
    </div>

    <div className='flex gap-6 items-center'>
        <label className='text-2xl font-semibold w-1/4'>CVV</label>
        <input 
            className='outline-none px-2 text-xl font-semibold border rounded-2xl w-3/4 h-10' 
            placeholder='Enter the CVV' 
            type='text' 
        />
    </div>
    
       
    </div>
    
  }

 
  

</div>


        

     </div>
     <div className='shadow-2xl h-fit  rounded-3xl w-1/3 p-3   '>
        <h1 className='text-3xl font-semibold'>Order Summary</h1>
        <div className='flex  mt-5  flex-col gap-5'>
            {carts.products.map((product,index)=>{
                return(
                    <div key={index} className='flex gap-10 shadow-xl rounded-2xl justify-between  items-center'>
                        <img src={product.image} alt='' className='w-40 h-40 object-cover'/>
                        <div>
                            <h1 className='text-xl font-semibold mx-10'>{product.name}</h1>
                            <h1 className='text-xl font-semibold mx-10'>${product.price*product.quantity}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='flex justify-between mx-10  mt-20'>
        <h1 className='text-2xl font-semibold'>Total Price</h1>
        <h1  className='text-2xl font-semibold'>${carts.total}</h1>

     </div>
     <button onClick={()=>placeordermethod()} className='bg-red-600 w-full p-3 mt-5 rounded-2xl text-2xl text-white font-bold'>Place Order</button>
     </div>
    

       </div>
      
    </div>
  )
}

export default Checkout
