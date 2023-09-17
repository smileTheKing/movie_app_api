import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='min-h-full min-w-[300px] text-[#D1CAA1]  p-8 justify-start items-center flex flex-col bg-[#A9CBEF]'>
        <h2 className=' font-bold text-3xl mt-4'> Genre</h2>
        <hr className='border-[#FDFCDC] w-full my-4 ' />
        <ul className='mt-8 space-y-6 flex flex-col items-center text-[#D1CAA1] justify-center font-semibold '>       
            <Link> <li> Action</li></Link>
            <Link> <li> Adventure</li></Link>
            <Link> <li>Sci-fi</li></Link>
            <Link> <li>Comedy</li></Link>
        </ul>
    </div>
  )
}

export default SideBar;