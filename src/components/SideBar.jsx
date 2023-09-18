import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <div className='  min-h-full min-w-[300px] text-slate-100  p-8 justify-start items-center md:flex flex-col bg-slate-700'>
        <h2 className=' font-bold text-3xl mt-4'> Genre</h2>
        <hr className='border-slate-500 w-full my-4 ' />
        <ul  className='mt-8 space-y-6 flex flex-col items-center text-slate-300 justify-center font-semibold '>       
            <Link> <motion.li
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="box block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Action</motion.li></Link>
            <Link> <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className=" box block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Adventure</motion.li></Link>
            <Link> <motion.li
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}className="box block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Sci-fi</motion.li></Link>
            <Link> <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="box block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Comedy</motion.li></Link>
        </ul>
    </div>
  )
}

export default SideBar;