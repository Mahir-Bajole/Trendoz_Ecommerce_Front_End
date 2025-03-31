import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import Model from '../Componants/Model';
import { removefromcart,decreasequantity,increasequantity } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Cart() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const cart = useSelector(state => state.carts);
    const [address, setAddress] = useState("main street, Washington");
    const totalq = cart.totalQuantity;
    const totalp = cart.total;
    const [ismodelopen,setmodelopen]=useState(false);
    const handleDelete = (item) => {
        dispatch(removefromcart({ id: item.id }));
    }

    const increment = (item) => {
        dispatch(increasequantity({ id: item.id }));
    }

    const decreament = (item) => {
        dispatch(decreasequantity({ id: item.id }));
    }
    

    return (
        
        cart.products.length > 0 ? (
            <div className='px-5 flex flex-col gap-10'>
                <h1 className='text-4xl font-bold px-5 mb-10 mt-10'>Shopping Cart</h1>
                <div className='flex justify-between'>
                    <h1 className='mx-5 text-3xl font-bold'>Product</h1>
                    <div className='flex gap-12 text-2xl font-semibold mr-165'>
                        <h1 className='mr-10'>Price</h1>
                        <h1>Quantity</h1>
                        <h1>SubTotal</h1>
                        <h1>Remove</h1>
                    </div>
                </div>
                <div className='w-full h-screen flex gap-5'>
                    <div className=''>
                        {cart.products.map((item, index) => (
                            <div key={index} className='p-5 shadow-2xl h-50 flex items-center justify-between'>
                                <img className='w-30 rounded-2xl mx-20' src={item.image} alt={item.name} />
                                <div className='flex gap-23 text-2xl'>
                                    <h1>${item.price}</h1>
                                    <div className='flex gap-3 items-center border'>
                                        <button onClick={() =>increment(item)} className='text-2xl w-5 border'>+</button>
                                        <h1 className='text-2xl'>{item.quantity}</h1>
                                        <button onClick={() =>decreament(item)} className='text-2xl w-5 border'>-</button>
                                    </div>
                                    <h1>${(item.quantity * item.price).toFixed(2)}</h1>
                                    <MdDelete onClick={() =>handleDelete(item)} className='text-red-600 cursor-pointer' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-1/3 px-4 py-2 shadow-2xl mx-10 h-fit'>
                        <h1 className='text-3xl font-semibold mb-5'>Total Cart</h1>
                        <div className='flex justify-between border-b mb-4'>
                            <h1>Total Items</h1>
                            <h1>{cart.totalQuantity}</h1>
                        </div>
                        <p className='text-2xl mb-5'>Shipping:</p>
                        <div className='flex items-center flex justify-between gap-5'>
                            <p className='font-semibold text-xl'>Shipping to:</p>
                            <span>{address}</span>
                        </div>
                        <button onClick={()=>setmodelopen(true)} className='mb-4 bg-green-400 rounded-2xl mt-2 p-1'>Change Address</button>
                        <div className='mt-5 flex items-center justify-between mb-5'>
                            <h1 className='text-2xl font-semibold'>Total Price</h1>
                            <h1>{cart.total}</h1>
                        </div>
                        <button onClick={()=>navigate("/checkout")} className='bg-red-500 w-full rounded-2xl text-2xl text-white'>Proceed TO Checkout</button>
                    </div>
                </div>
                <Model ismodelopen={ismodelopen} setAddress={setAddress} setmodelopen={setmodelopen}>
                <ChangeAddress setAddress={setAddress} setmodelopen={setmodelopen} />
                </Model>
            </div>
        ) : (
            <div className='flex items-center ml-10 justify-center'>
                <img src='https://www.shutterstock.com/image-vector/no-item-found-vector-outline-260nw-2082716986.jpg' alt='Empty Cart' className='w-1/3 object-cover h-1/2 mr-4' />
            </div>
        )
    );
}

export default Cart;
