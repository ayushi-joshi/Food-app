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
    const {name, email, message}=formData;
    const handleSubmit = (e) => {
        e.preventDefault();
       if(!name ||  !email ||!message){
        alert("please fill all the details");
        return;
       }


       setIsSubmitted(true);
    };
  return (
   
    <div className='w-full contact'> 
    
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
                <input name="name" type="text" placeholder='Name:' required className='p-2 bg-transparent border-2 valid:required' value={formData.name} onChange={handleInputChange}/>
                <input name="email" type="text" placeholder='Email:' required className='mt-2 p-2 bg-transparent border-2' value={formData.email} onChange={handleInputChange} />
            <textarea name="message" id="" cols="30" rows="10" required className='mt-2 p-2 bg-transparent border-2' placeholder='Message:'value={formData.message} onChange={handleInputChange}></textarea>
            <button className='border-2 bg-pink-200 mt-2'>Send Message</button>
            </form></>
        )
       }
     
        </div>-
    </div>
    </div>
    </div>
  )
}

export default Contact;
