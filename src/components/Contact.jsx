import React from 'react'
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
       setIsSubmitted(true);
    };
  return (
   
    <div className='w-full h-[91vh] '> 
     <img className='top-0 left-0 lg:w-full lg:h-full h-full  w-full object-cover'src="https://media.istockphoto.com/id/1526533829/photo/shredded-pancake-or-hand-pancake-of-taiwan-food-nutritious-breakfast-chinese-food-traditional.jpg?s=612x612&w=0&k=20&c=Qwcp935fDV7sEN3VF9vAbdhaevBrwdss2Ut_lONO_AI=" alt="" />
    <div className='flex justify-center items-center'>
    <div className='absolute top-[20%] flex flex-col justify-center items-center'>
        <div className='border-2 shadow-lg p-2 lg:w-full w-2/3 '>
            <h1 className='text-2xl font-bold text-center'>Contact Us</h1>

       {
        isSubmitted ?(
            <p className='text-2xl'>Thank You for Your Feedback!</p>
        ):(
           <> <p>  Have questions or feedback?Just fill out the form below and we'll get back to you soon!</p>
           <form action=""  className='flex flex-col mt-3'onSubmit={handleSubmit} >
                <input name="name" type="text" placeholder='Name:' className='p-2 bg-transparent border-2' value={formData.name} onChange={handleInputChange}/>
                <input name="email" type="text" placeholder='Email:' className='mt-2 p-2 bg-transparent border-2' value={formData.email} onChange={handleInputChange} />
            <textarea name="message" id="" cols="30" rows="10" className='mt-2 p-2 bg-transparent border-2' placeholder='Message:'value={formData.message} onChange={handleInputChange}></textarea>
            <button className='border-2 bg-pink-200 mt-2'>Send Message</button>
            </form></>
        )
       }
     
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
