import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='min-h-full min-w-[300px] p-8 justify-start items-center flex flex-col bg-slate-200'>
        <h2 className=' font-bold text-3xl mt-4'> Genre</h2>
        <hr className='border-slate-300 w-full my-4'/>
        <ul className='mt-8 space-y-6 flex flex-col items-center justify-center font-semibold text-slate-700'>       
            <Link> <li> Action</li></Link>
            <Link> <li> Adventure</li></Link>
            <Link> <li>Sci-fi</li></Link>
            <Link> <li>Comedy</li></Link>
        </ul>
    </div>
  )
}

export default SideBar;