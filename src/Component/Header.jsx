import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  
  return (
    <div>
        <div className='h-[70px]  flex justify-between items-center '>
      <div className=' flex items-center '>
      <img src='/logo-.png' alt='logo' className='h-[70px] w-[70px] mt-1 ml-5' />
      <h1 className='text-white text-2xl '>Learn<span className='text-blue-300 text-xl'>sphere</span></h1>
      </div>

      <div className='flex items-center mt-7 gap-9 mr-10 text-white text-lg font-serif font-light'>
        <button>About us</button>
        <button>Creation</button>
        <button>Process</button>
      </div>

      <div className=' flex items-center font mt-4 gap-7 mr-10 '>
        <Link to = '/sign-in'><button className=' bg-gray-700 px-3 hover:bg-blue-500 text-md rounded-lg py-1 text-white'>Login</button></Link>
        <button  className=' bg-blue-400 px-3 hover:bg-gray-700 text-md rounded-lg py-1 text-white'><Link  to={'/dashboard'}>Get Started </Link></button>
      </div>
    </div>
      
    </div>
  )
}

export default Header
