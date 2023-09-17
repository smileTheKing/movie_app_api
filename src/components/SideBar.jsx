import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='  min-h-full min-w-[300px] text-slate-100  p-8 justify-start items-center md:flex flex-col bg-slate-700'>
        <h2 className=' font-bold text-3xl mt-4'> Genre</h2>
        <hr className='border-slate-500 w-full my-4 ' />
        <ul className='mt-8 space-y-6 flex flex-col items-center text-slate-300 justify-center font-semibold '>       
            <Link> <li > Action</li></Link>
            <Link> <li> Adventure</li></Link>
            <Link> <li>Sci-fi</li></Link>
            <Link> <li>Comedy</li></Link>
        </ul>
    </div>
  )
}

export default SideBar;