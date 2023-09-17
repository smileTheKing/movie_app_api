import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <div className='  min-h-full min-w-[300px] text-slate-100  p-8 justify-start items-center md:flex flex-col bg-slate-700'>
        <h2 className=' font-bold text-3xl mt-4'> Genre</h2>
        <hr className='border-slate-500 w-full my-4 ' />
<<<<<<< HEAD
        <ul  className='mt-8 space-y-6 flex flex-col items-center text-slate-300 justify-center font-semibold '>       
            <Link> <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}> Action</motion.li></Link>
            <Link> <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}> Adventure</motion.li></Link>
            <Link> <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>Sci-fi</motion.li></Link>
            <Link> <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>Comedy</motion.li></Link>
=======
        <ul className='mt-8 space-y-6 flex flex-col items-center text-slate-300 justify-center font-semibold '>       
            <Link> <li > Action</li></Link>
            <Link> <li> Adventure</li></Link>
            <Link> <li>Sci-fi</li></Link>
            <Link> <li>Comedy</li></Link>
>>>>>>> main
        </ul>
    </div>
  )
}

export default SideBar;