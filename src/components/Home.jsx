import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useEffect } from 'react';
import { FaStar,FaFacebookF,FaTwitter ,FaInstagram,FaPhoneAlt  } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import { FaLocationDot } from "react-icons/fa6";
import 'slick-carousel/slick/slick-theme.css';
import { MdEmail } from "react-icons/md";

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
   
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/menu")
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  
  };


  const carouselItems = [
    {
      id: 1,
      title: 'Double Cheese Paratha',
      Price: 70,
      imageUrl: 'https://media.istockphoto.com/id/1209898811/photo/chapati-wrap-with-cheese-vegetarian-food.jpg?s=612x612&w=0&k=20&c=nSbQOQrOq4W2VDYlazvsX9BERrqPekAM5KIEMf0kwCU=',
    },
    {
      id: 2,
      title: "Corn Cheese Paratha",
      Price: 70,
      imageUrl: 'https://media.istockphoto.com/id/1311045811/photo/vegetable-tortilla-wrap-with-cheese.jpg?s=612x612&w=0&k=20&c=8hV7p-Qmn6JdlXf7uJ_GhBvMCF26eKW-iCRGWPhnfVg=',
    },
   
    {
      id: 3,
      title: 'Paneer Paratha',
      Price: 80,
      imageUrl: 'https://media.istockphoto.com/id/1218612786/photo/grilled-chicken-sandwich-with-chicken-sauce.jpg?s=612x612&w=0&k=20&c=Lj8LvbGptUBxGmIJmca0LN7jGwi31tSBEUOfjyJ-2_s=',
    },
    {
      id: 4,
      title: 'Masala Paratha',
      Price: 60,
      imageUrl: 'https://media.istockphoto.com/id/1323465260/photo/trio-stuffed-naan-green-tikka-chicken-qeema-minced-meat-and-chocolate-brownie-cookie.jpg?s=612x612&w=0&k=20&c=h5io1q2n2TEdh4iBQalqMBYWIY4F9wfQ9FuCYkUE5o0=',
    },
    {
      id: 5,
      title: 'Veg paratha',
      Price: 60,
      imageUrl: 'https://media.istockphoto.com/id/1400111999/photo/mix-vegetable-kathi-roll.jpg?s=612x612&w=0&k=20&c=1s0zfb3u1wT-zZ-fmwRG_dSq-A75wgMqc8E0B8dPBeY=',
    },
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const intervalId = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 2000);

   
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   <div className='flex flex-col h-full lg:flex w-full lg:w-full  '>
     
       <div className=' img lg:w-full  w-full  sm:w-full md:w-full  '>
           
            <div className='absolute top-[35%] left-8  flex flex-col justify-center items-center space-y-3 ' data-aos="fade-right"  data-aos-duration="2000">
           <h1 className='font-bold text-4xl text-white' >Feels Like <span className='text-red-600'>Home,</span>Tastes</h1>
           <h1 className='font-bold text-4xl text-white'>Like a <span className='text-red-600'>Paradise.</span></h1> 
           <button className='bg-gray-800 w-60 h-10 text-white hover:bg-slate-100 hover:text-black font-bold'onClick={handleClick}>Order Here</button>
  </div> 
             </div>
        
           
    
      <div className='h-10 bg-rose-100 flex justify-center items-center'>
        <h1 className='font-bold text-xl'>Most Popular</h1>
        </div>
     <div className=' w-full flex space-x-4 mt-5 p-4 items-center justify-center '>
            
            <Slider {...settings} ref={sliderRef}>
              {carouselItems.map((item) => (
                <div key={item.id} className=' container flex '>
                  <img
                    className=' w-64 h-32 object-cover rounded-md '
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className=' h-1/2   text-black  flex flex-col items-center mt-2'>
                    <h2 className='text-xl '>{item.title}</h2>
                    <p className='text-lg'>₹ {item.Price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
         <div className='lg:flex lg:flex-col mt-2 '>
          <h1 className='text-center text-2xl font-bold'>Our Customer Say</h1>
         <div className='lg:flex lg:flex-row mt-5 w-full sm:flex-wrap lg:flex-nowrap '>
         <div className=' p-2 flex flex-row' data-aos="flip-left"data-aos-duration="2000">
              <div className='ms-2'><img className='h-12 w-44' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer1.png" alt="" />
              
              </div>
            
            <div className='border-clip flex items-center justify-center'>
            <div className=' box1 p-2 bg-white flex justify-end '>
              <div className='flex flex-col w-4/5'>
              <span className='flex space-x-1'><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/></span>
             
              <p className='text-sm mt-2'>The food at Taste Trekker is simply amazing! The flavors are rich, and the ingredients are fresh. I can't get enough of their delicious parathas. Highly recommended!
</p>
              <p className=' text-sm font-bold mt-2 '>-Louise Kelly
</p>
           </div>
            </div>
            </div>
            </div>
            
            <div className=' p-2 flex flex-row' data-aos="flip-left"data-aos-duration="3000" >
              <div className='ms-2'><img className='h-12 w-44' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer3.png" alt="" />
              
              </div>
              <div className='border-clip flex items-center justify-center'>
            <div className=' box1 p-2 bg-white flex justify-end '>
              <div className='flex flex-col w-4/5'>
              <span className='flex space-x-1'><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/></span>
             
              <p className='text-sm mt-2'> The variety of parathas at Taste Trekker is outstanding! Each bite is a burst of flavors, and the service is excellent. I keep coming back for more. A truly delightful experience!  Highly recommended!</p>
              <p className=' text-sm font-bold mt-2 '>-Wilma Mumduya</p>
           </div>
            </div>
            </div>
            </div>
            <div className=' p-2 flex flex-row' data-aos="flip-left" data-aos-duration="2000">
              <div className='ms-2'><img className='h-12 w-44' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer2.png" alt="" />
              
              </div>
            
           <div className='border-clip flex items-center justify-center '>
           <div className=' box1 p-2 bg-white flex justify-end '>
              <div className='flex flex-col w-4/5'>
              <span className='flex space-x-1'><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/><FaStar color='#fbbf24'/></span>
             
              <p className='text-sm mt-2'>Taste Trekker never disappoints! The quality of the ingredients is evident in every dish. The staff is friendly, and the ambiance is cozy. I highly recommend trying their special paratha menu!</p>
              <p className=' text-sm font-bold mt-2'>-Charles White</p>
           </div>
            </div>
           </div>
            </div>
            
            </div>
         </div>
  <div className=' contact-sec lex flex-col  mt-4 space-y-7 '>
  <div className=' flex flex-col items-center text-white justify-center mt-4 '>
      <h1 className='text-2xl font-bold '>Contact us</h1>
      <button className=' mt-4 w-60 h-10 border hover:bg-blue-700 hover:text-black font-bold' onClick={()=>navigate("/contact")}>contact here</button>
    
    </div>
   <div className='flex'>

   <div className='flex flex-col justify-start  ms-4 text-white '>
      <p className='w-2/4'>At Taste Trekker, we believe in using the freshest ingredients sourced locally. No preservatives, 
                    no compromises.</p>
<span className=' w-2/4 text-center flex space-x-4 mt-4 p-2  '><a href="facebook.com">

<FaFacebookF size={35} color='white' /></a>
<a href="twitter.com">

<FaTwitter  size={35} color='white'/></a>
<a href="instagram.com">

<FaInstagram size={35} color='white'/></a>
</span>
    </div>
   <div className=' w-1/2 flex  justify-end '>
   
   <div className=' flex flex-col   me-4 space-y-5 text-white '>
   
 <div className=' flex flex-row  '>  <FaLocationDot size={20}  />  <p className='ms-4' > 
 456 Street, Spice City, Mumbai, India
      </p></div>
      <div className=' flex flex-row '>  <MdEmail size={20} />  <p className='ms-4' > 
      info@parathaparadise.in
      </p></div>
      <div className=' flex flex-row '>  <FaPhoneAlt  size={20} />  <p className='ms-4' > 
      +91 98765 43210
      </p></div>
      
     
    </div>
   </div>
  </div>
   </div>
 <div className='bg-gray-800 flex text-white items-center justify-center font-semibold h-10'>
<p>Copyright ©2023 All rights reserved</p>
 </div>
            </div>

      
       
  

  )
}

export default Home
