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
  const [hasSearched, setHasSearched] = useState(false);
  const [disable,setDisable]=useState([])
  const {cardData, CardDispatch}=useContext(CardContext); 
const { CartDispatch}=useContext(CartContext);
const{listData}=useContext(CardContext)
useEffect(() => {
  if(listData.length > 0) {
      setHasSearched(true);
  }
}, [listData]);



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
//   const navigate=useNavigate()
//   const handleClick=()=>{
//   navigate("/")
 
// }

  return (
  
      <div className='flex flex-row h-auto w-full'>
        
     
      
    <div  className='p-2 lg:flex-col lg:h-auto lg:w-1/2 lg:space-y-4 space-y-4' >
    {cardData.map(data => (
    <div key={data.id} className='h-48 lg:w-full  border-2 shadow-lg hover:bg-orange-100 border-black w-full flex flex-row'>
   <div className='w-1/3 '><img className="h-[100%]  object-cover "src={data.img} alt="" /></div>
   <div className='flex flex-col p-2 space-y-1 lg:space-y-2 w-1/2'><h1 className='font-bold text-xl'>{data.Dishes}</h1>
   <p className='text-sm'>₹ {data.Price}</p>
   <p className='w-full'>{data.Addon}</p>
   <button className='bg-red-500 h-8 lg:h-10 w-56 font-bold text-white' disabled={disable.includes(data.id)} onClick={()=>handleAdd(data)}>Add to Cart</button>
    
   </div>
   </div>  
   ))}
  </div>
  
  <div className='lg:p-2 lg:w-2/5 hidden sm:block'>

 
  
  {

hasSearched ? (
  listData.length ? (
      listData.map(data => (
        <div key={data.id}  className='h-64 lg:w-full  border-2 shadow-lg hover:bg-orange-100 border-black w-full flex flex-row '>
        <div className='w-1/2 '><img className="h-[100%]  object-cover" src={data.img}  alt="" /></div>
        <div className='flex flex-col p-2 space-y-1 lg:space-y-4 w-1/2'><h1 className='font-bold text-xl'>{data.Dishes}</h1>
      <p className='text-sm'>₹ {data.Price}</p>
        <p className='w-full'>{data.Addon}</p>
        <button className='bg-red-500 h-8 lg:h-10 w-56 font-bold text-white' disabled={disable.includes(data.id)} onClick={()=>handleAdd(data)}>Add to Cart</button>
      </div>
      </div> 
      ))
  ) : (
      <div >Loading...</div>
  )
) :(
  <div className='text text-2xl flex  justify-center'><h1>Start your search!</h1></div>
)


      
  }

</div>
  </div>
  )
  }


export default Menucard;
