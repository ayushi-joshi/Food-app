import React from 'react'
const About = () => {
  
  return (

    <div className='w-full h-[91vh] '> 
         <img className='top-0 left-0 lg:w-full lg:h-full h-full  w-full object-cover'src="https://media.istockphoto.com/id/905018614/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=wBR4d4rvD6Nhk-c9Yf9KgUWLPMqtwceJOWQD2IzJTwM=" alt="" />
       <div className='absolute top-[25%]   flex flex-col justify-center items-center '>
        <div className='text-white  lg:w-2/3 p-2 h-1/2  '>
            <h1 className='lg:text-4xl lg:font-bold text-center font-bold text-xl'>About Paratha House</h1>
            <p className='lg:my-3 lg:text-xl'>Over the years, we've refined our recipes, taking inspiration from various regions across India. 
                    Our dedicated chefs knead, roll, and roast each paratha to perfection, ensuring a balance of flavors and textures.</p>
        <p className='lg:text-xl'>At Paratha Paradise, we believe in using the freshest ingredients sourced locally. No preservatives, 
                    no compromises. Just the authentic taste of traditional parathas, served with love and a side of 
                    delightful pickles and yogurt.</p>
        </div>
       </div>
    </div>
   
  )
}

export default About
