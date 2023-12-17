import React from 'react'
import  { useState } from 'react';
const Checkout = () => {
    const initialFormData = {
        name: '',
        address: '',
        creditCard: ''
      };
        const [formData, setFormData] = useState(initialFormData);
   const [submit, setSubmit]=useState(false)
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
           
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
           
          setSubmit(true)
            setFormData(initialFormData);
        };
        return(
            <div className='w-full h-[91vh] '> 
            <img className='top-0 left-0 lg:w-full lg:h-full h-full  w-full object-cover'src="https://media.istockphoto.com/id/1692848320/photo/flying-cartoon-shopping-basket-on-purple-background.jpg?s=612x612&w=0&k=20&c=DSryiY83Ooe0tDe_PSuN8p4KR0xF5Gdq-0T2l54jOr0=" alt="" />
           <div className='flex justify-center items-center'>
           <div className='absolute top-[20%] flex flex-col justify-center items-center'>
        <div  className='border-2 shadow-lg p-2 lg:w-full  '>
        <h2 className='text-2xl text-center'>Checkout</h2>
     {
    submit ?(
<p className='text-2xl'>Thank You for Your Feedback!</p>
        ):(
       <>
            <form onSubmit={handleSubmit} className='mt-3 '>
           
           <label>Name:</label>
           <input className='w-full' required name="name" type="text" value={formData.name} onChange={handleInputChange} />
       
     
           <label>Address:</label>
           <input className='w-full' required  name="address" type="text" value={formData.address} onChange={handleInputChange} />
      
     
           <label>Credit Card:</label>
           <input className='w-full' required name="creditCard" type="text" value={formData.creditCard} onChange={handleInputChange} />
      
    <div className=' flex justify-center'>   <button type="submit" className='bg-green-800 mt-2 w-32'>Place Order</button>
    </div>
   </form>
       </>
        )
     }
    </div>
    </div>
    </div>
    </div>
);
}

export default Checkout;
