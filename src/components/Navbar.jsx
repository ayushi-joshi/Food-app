import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import {AiFillHome, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BsFillCartFill} from"react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'     
import CartContext from '../Data/CartContext'
import CardContext from '../Data/CardContext'
const ADD_ON_PRICES = {
  ExtraSauce: 5,
  Yogurt: 15,
  Corn: 10,
  Cheese: 20
};

const Navbar = () => {
  const [search, setSearch]=useState("")
  const [nav,setNav]=useState(false)
  const {CardDispatch}=useContext(CardContext)
  const [cart,setCart]=useState(false)
  const {cartItems}=useContext(CartContext);
const {CartDispatch}=useContext(CartContext);

const total=cartItems.reduce((p,c)=>{

 return p +( c.Price * c.quantity)
  },0);
const handleSearch=(e)=>{
e.preventDefault()

CardDispatch({
  type:"SEARCH_DATA",
  payload:search,
});
setSearch("");
}

  const handleIncreaseQuantity = (itemId) => {
    CartDispatch({
        type: "INCREASE_QUANTITY",
        payload: itemId,
    });
};

const handleDecreaseQuantity = (itemId) => {
    CartDispatch({
        type: "DECREASE_QUANTITY",
        payload: itemId,
    });
};
  const handleRemove=(id)=>{
    CartDispatch({
        type:"REMOVE_ITEM",
        payload: id,

    });
  };
  
  const handleAddOnSelect = (e, itemId) => {
    const selectedAddon = e.target.value;
    if (!selectedAddon) {
      console.log("No addon selected");
      return;
  }
  const addOnprice = cartItems.find(i => i.id === itemId)?.addOnprice[selectedAddon];
  if (!addOnprice) {
    console.error("Selected add-on price is not defined!");
    return;
}
    CartDispatch({
      type: "ADD_ADDON",
      payload: {  
        itemId,
        addon: selectedAddon,
        Price:addOnprice
        
      }
    });
  };    
    
const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/menu")
    
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
 setIsSubmitted(true);
};
const handleCheck=()=>{
  if(cartItems.length===0){
    alert("Empty cart,  please add the item in cart");
  }
  else{
    navigate("/checkout")
  }
}
 
  return( 
    
   <nav className="bg-red-500  nav w-full   flex items-center justify-between space-x-12">
<div className=" flex items-center  w-60">
<img style={{height:60}} className='lg:mx-10' src="https://miro.medium.com/v2/resize:fit:596/0*lrA8egQdkUtQtJFb.png" alt="" />
    <h1 className="lg:-mx-4 text-sm  mx-2 font-bold text-white ">TASTE TREKKER</h1>
</div>
<div className="lg:flex lg:space-x-10 lg:font-bold lg:text-white lg:list-none lg:cursor-pointer hidden sm:hidden">
  <Link to="/"> <li className='hover:text-gray-500' >Home</li></Link>
  <Link to="/about">  <li className='hover:text-gray-500'>About</li></Link>
 <Link to="/menu"> <li className='hover:text-gray-500'>Menu</li></Link>
 <Link to='/contact'><li className='hover:text-gray-500'>Contact</li></Link>
</div>  
<div className='bg-gray-100 lg:flex items-center px-2  relative left-12 w-[150px] hidden sm:block md:hidden
 lg:w-[300px]'>
  <AiOutlineSearch size={20} />
  <form onSubmit={handleSearch}>
  <input className='focus:outline-none bg-transparent p-1 mx-2' required type="search" value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
  </form>
</div>
   <div className=" w-40  justify-end flex  lg:hidden cursor-pointer sm:w-96  "onClick={()=>setNav(!nav)} >
   <AiOutlineMenu size={25} color='white'  />
   
   </div>
   <div>
   <button className="flex items-center justify-center sm:mx-5 lg:mx-10 mx-2"  >
  <BsFillCartFill size={25} color='white'onClick={()=>setCart(!cart)}  />({cartItems.length})
</button>
   </div>

   <div className={nav ? 'fixed top-0 right-10 w-[150px] h-[200px]  bg-slate-100 z-10 duration-300': 'fixed top-[-100%] right-0 w-[150px] lg:hidden sm:hidden  h-[200px] bg-green-200 z-10 duration-300' }>
   <AiOutlineClose size={20} onClick={()=>setNav(!nav)}
className='absolute right-20 top-4 cursor-pointer'/>

<div>
  <ul className=' mt-12  cursor-pointer flex flex-col 
  items-center font-bold space-y-3' >
  <Link to='/'><li className='hover:text-red-400 flex'>Home</li></Link>
    <Link to='/about'><li className='hover:text-red-400'>About</li></Link>
    <Link to='/menu'><li className='hover:text-red-400'>Menu</li></Link>
    <Link to='/contact'><li className='hover:text-red-400'>Contact</li></Link>
  </ul>
</div>
   </div>
  
      
      <div  className={cart ? 'absolute top-0 right-0 w-80 lg:w-96   bg-slate-100 z-10 duration-300': 'absolute lg:hidden sm:hidden top-[-100%] right-0 w-[150px]  h-[200px] bg-green-200 z-10 duration-300' }>

      <AiOutlineClose size={25} onClick={()=>setCart(!cart)}
      className='absolute right-2 top-4 cursor-pointer'/>
      <div>
        <h1 className='text-red-500 font-bold mt-3 text-xl'>SHOPPING CART</h1>
      </div>
     

      {
        cartItems.map((item)=>(
  
    
          <div key={item.id}   className='flex flex-col p-1'>
       
      <div className='flex flex-row border-2'>
      <div className='w-40 h-30 lg:h-40'>
        <img className='h-full object-cover' src={item.img} alt="" />
      </div>
      <div className='p-2 flex flex-col space-y-3'>
        <h1 className='font-bold'>{item.Dishes}</h1>
        <p>₹  {item.Price*item.quantity}</p>
      <span className='flex flex-row space-x-3'>
        <div className='border-2 flex w-14 space-x-3  border-black'>
      <button onClick={() => handleDecreaseQuantity(item.id)} >-</button>
     
      <p>{item.quantity}</p>
      <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
        </div>
         <button className='bg-slate-500 w-20 text-white'onClick={()=>handleRemove(item.id)}>Remove</button></span>
        
     
         <select onChange={(e) => handleAddOnSelect(e, item.id)}>
    <option value="">Select Addon</option>
    {  Object.keys(ADD_ON_PRICES).map((addonKey) => (
      <option key={addonKey} value={addonKey}>
        {addonKey} - ₹{ADD_ON_PRICES[addonKey]}
      </option>
    ))}
  </select>
         
 
         </div>
 </div>
      </div>
               ))
      }
       
         
       <div className=' bg-gray-300 w-full mt-3 '>
       <span className='flex justify-between p-4'>
         <h1 className='text-xl font-bold'>Subtotal:</h1>
         <p className='text-xl font-bold'>₹  {isNaN(total) ? "Error" :total}</p>
       </span>
     <div className='flex justify-end mx-3 p-2'> <button className='bg-yellow-300 w-1/2 h-10'onClick={handleCheck}>Checkout</button></div> 
     </div>
      </div>

      
      
      
         </nav>

  )
 
}

export default Navbar;

