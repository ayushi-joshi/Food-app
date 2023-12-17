import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardContext from '../Data/CardContext';

import CartContext from '../Data/CartContext'
const ADD_ON_PRICES = {
  ExtraSauce: 5,
  Yogurt: 15,
  Corn: 10,
  Cheese: 20
};
const Menucard = () => {

  const [disable,setDisable]=useState([])
  const {cardData, CardDispatch}=useContext(CardContext); 
const { CartDispatch}=useContext(CartContext);
const{listData}=useContext(CardContext)




  const handleAdd=(item)=>{
     CartDispatch({ 
      type:"ADD_ITEM",
payload:{
  ...item,
  addOns: [],
  addOnprice:ADD_ON_PRICES,
}

});
setDisable(prev => [...prev, item.id])
  };


  return (
  
    
        
     
      
<div className='flex items-center justify-center w-full  '>
<div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-3 ' >
    {cardData.map(data => (
    <div key={data.id} className='h-85 lg:w-80  rounded-lg shadow-lg hover:bg-orange-100 border-black w-full flex flex-col'>
   <div className='w-full h-48 '><img className="  bg-center bg-cover h-[100%] w-full object-cover "src={data.img} alt="" /></div>
   
  <div className='flex flex-row justify-between w-full p-2'>
  <div className='flex flex-col  space-y-1 lg:h-32 w-full'><h1 className='font-bold text-xl'>{data.Dishes}</h1>
   <p className='w-full text-ellipsis overflow-hidden ...'>{data.Addon}</p>
   <p className='text-md'>₹ {data.Price}</p>
   <div className='h-10 flex items-center justify-center '><button className='bg-red-500 h-8 w-60  lg:h-10 rounded-md font-bold text-white' disabled={disable.includes(data.id)} onClick={()=>handleAdd(data)}>Add to Cart</button>
    </div>
  </div>
   </div>
   </div>  
   ))}
  </div>
</div>
)}



export default Menucard;
