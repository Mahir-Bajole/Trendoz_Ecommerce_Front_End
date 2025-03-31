import React from 'react'
import Infocard from './Infocard'
import { FaTruck } from 'react-icons/fa';
import { MdDiscount } from "react-icons/md";
import { RiSecurePaymentFill} from "react-icons/ri";

import {FaMoneyBillAlt} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";




function Informationsections() {
    const carddata=[{
        icon:<FaTruck className='w-20 text-red-600 h-10'/>,
        title:"Free Shipping",
        desc:"Delivered within 3-5 business days"
    },{
        icon:<MdDiscount className='w-20 text-red-600 h-10' />,
        title:"discount",
        desc:"Enjoy the best price on products available"
    },{
        icon:<RiSecurePaymentFill className='w-20 text-red-600 h-10' />,
        title:"Payment",
        desc:"Your Payent Information is Safe with us"
    },{
        icon:<FaMoneyBillAlt className='w-20 text-red-600 h-10' />,
        title:"100% Money Back",
        desc:"Full Refund if you are not satisfied"
    },{
        icon:<BiSupport className='w-20 text-red-600 h-10'/>,
        title:"Support 24/7",
        desc:"We are here to asist you any time"
    }]
  return (
    <div className='flex gap-10 w-full px-20 mt-20 mb-20 mx-auto'>
       {
         carddata.map((card,index)=>(
             <Infocard key={index} icon={card.icon} title={card.title} desc={card.desc}/>
         ))
       }
      
    </div>
  )
}

export default Informationsections
