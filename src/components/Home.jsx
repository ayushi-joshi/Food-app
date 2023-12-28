import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  return (
   <div className='flex flex-col h-full lg:flex w-full lg:w-full  '>
     
       <div className=' img lg:w-full  w-full sm:h-80 sm:w-full md:w-full  '>
           
            <div className=' absolute top-[35%] left-8  flex flex-col justify-center items-center space-y-3 '>
           <h1 className='font-bold text-4xl text-white' >Feels Like <span className='text-red-600'>Home,</span>Tastes</h1>
           <h1 className='font-bold text-4xl text-white'>Like a <span className='text-red-600'>Paradise.</span></h1> 
           <button className='bg-gray-800 w-60 h-10 text-white hover:bg-slate-100 hover:text-black font-bold'onClick={handleClick}>Order Here</button>
  </div> 
             </div>
        
           
    
      <div className='h-10 bg-rose-100 flex justify-center items-center'>
        <h1 className='font-bold text-xl'>Most Popular</h1>
        </div>
     <div className=' w-full flex space-x-4 mt-2 p-2 items-center justify-center '>
            
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
          <div className='flex'>
            
            
          </div>
    <div className='h-48 bg-gray-200 flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Contact us</h1>
      <button className='bg-blue-700 mt-4 w-60 h-10 text-white hover:bg-slate-500 hover:text-black font-bold' onClick={()=>navigate("/contact")}>contact here</button>
    </div>
            </div>

      
       
  

  )
}

export default Home
