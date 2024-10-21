import React from 'react'
import Header from '../Component/Header'
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';



const Hero = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen flex  flex-col  font-serif items-center mt-[5%]'>
        <p className='text-6xl tracking-wide text-white'>Smart <span className='text-blue-500'>Scheduling</span> for</p>
        <p className='text-4xl mt-4 text-white'>Maximum <span className='text-blue-300'>Productivity</span></p>

        <div className='flex item center gap-5 justify-center mt-16'>
          <div className=' flex h-[170px] rounded-md bg-opacity-50 w-[250px] justify-center items-center bg-gray-700'>
            <p className='text-sm tracking-wide text-opacity-65 text-white mx-10'>⚡AI-driven scheduling that adapts to your needs,
              maximizing productivity and reducing stress.</p>
          </div>

          <div className=' flex h-[170px] rounded-md bg-opacity-50 w-[250px] justify-center items-center bg-gray-700'>
            <p className='text-sm tracking-wide text-opacity-65 text-white mx-10'>📝 Create study plans or work schedules quickly, saving time and boosting productivity.</p>
          </div>

          <div className='flex h-[170px] rounded-md bg-opacity-50 w-[250px] justify-center items-center bg-gray-700'>
            <p className='text-sm tracking-wide  text-opacity-65 text-white mx-10'>⏱️ Optimized task flow with real-time tweaks and  ensuring you stay on track. </p>
          </div>

        </div>

        <div className='flex mt-5 '>
          <p className='text-md tracking-wide text-white opacity-50  flex'>Let's get started with AI to design a schedule for your plans.</p> <span className='text-white'><Link to ='/dashboard'><ArrowRight className='opacity-80'size={25}  opacity={85}/></Link></span>


        </div>
      </div>

    </>

  )
}

export default Hero
