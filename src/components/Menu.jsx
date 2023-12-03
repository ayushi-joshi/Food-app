import React, { useContext } from 'react'
import CardContext from '../Data/CardContext';
import Menucard from './Menucard';


const Menu = () => {
    
  return (
   
    <div className=' flex flex-col'>
         <div className='p-2 bg-fuchsia-100  flex justify-center'>
        <h1 className='font-bold text-2xl text-red-600'>Enjoy Our Delicious Meal</h1>

      </div>
      <Menucard  />

 
  </div>
  
  );
};

export default Menu;
