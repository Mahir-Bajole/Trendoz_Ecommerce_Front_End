import React from 'react';
import { useNavigate } from 'react-router-dom';


function Order({ order, setOrder }) {
    console.log("orfer",order)
    const navigate=useNavigate();
    const gobackHandle = () => {
       
     
        navigate("/")


    }
    
    
 
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-xl rounded-xl p-10 w-3/4 md:w-1/2'>
        <h1 className='text-4xl font-bold text-center text-green-500 mb-5'>
          Thank you for your order!
        </h1>
        <p className='text-2xl text-center mb-4'>
          We're thrilled to have you as a customer. Your order is being processed.
        </p>

        {order.products.length>0 ? (
          <div>
            <h2 className='text-2xl font-semibold'>Order Details:</h2>
            <div className='mt-4'>
              <p className='text-xl'>Order Number: {order.ordernumber}</p>
              <p className='text-xl'>Total Price: ${order.totalprice}</p>
              <p className='text-xl'>Items in your order:</p>
              <ul className='list-disc pl-6'>
                {
                    order.products.map(item => (
                        <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
                    ))
                }
              </ul>
            </div>
          </div>
        ) : (
          <p className='text-xl text-red-500'>
            Oops! It looks like there was an issue with your order. Please try again later.
          </p>
        )}

        <button
          onClick={() => gobackHandle()} 
          className='mt-5 bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold text-xl'
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Order;
