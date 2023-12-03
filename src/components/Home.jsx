import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/menu")
  }
  return (
   <div className='flex flex-col lg:flex-row h-full w-screen lg:w-screen '>
     
       <div className='lg:w-4/6  w-full sm:w-full md:w-full h-full '>
            <img className='  lg:h-[595px] h-[400px] w-full sm:w-full md:w-full bg-center bg-cover ' src="https://media.istockphoto.com/id/892941038/photo/from-makhani.jpg?s=612x612&w=0&k=20&c=5PVZ3Mbn5PddzaJ7UA-qne0mGf_8yLyZI9UUM4LzWCg=" alt="" />
        
        </div>
        <div className='flex flex-col justify-center items-center space-y-3 h-[185px] bg-gray-400 lg:w-[520px] lg:h-[595px]'>
           <h1 className='font-bold text-4xl' >Feels Like <span className='text-white'>Home,</span>Tastes</h1>
           <h1 className='font-bold text-4xl'>Like a <span className='text-white'>Paradise.</span></h1> 
           <button className='bg-gray-800 w-60 h-10 text-white hover:bg-slate-100 hover:text-black font-bold'onClick={handleClick}>Order Here</button>
        </div>
        </div>
  
  )
}

export default Home
