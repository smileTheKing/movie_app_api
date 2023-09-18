import React from 'react';
import { motion } from 'framer-motion';

const Favorite = () => {
  return (
    <div className=' flex flex-1 mt-16  min-h-screen bg-slate-600'>
    
      <motion.div 
      variants={{
        hidden:{opacity:0},
        visible:{opacity:1}
      }}

      initial='hidden'
      animate='visible'
      transition={{duration:0.5, delay:0.25}}


      className="container my-16  bg-white mx-auto items-center flex justify-center font-bold text-3xl">
      Favorite Movies
      </motion.div>
    </div>
  )
}

export default Favorite