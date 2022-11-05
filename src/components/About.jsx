import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useTypedWord } from './useTypedWord'
import {Link} from 'react-router-dom'

const words = [ "Software Engineer", "Distributed Systems Developer", "Computer Science Major", "Intelligence Thread", "Devices Thread"]

const About = () => {
  const word = useTypedWord(words)
  return (
    <div name="about" className='w-full min-h-screen bg-[#0c1d34] text-[#ffffff]'>
      
      <div className='flex flex-col justify-start w-full h-full'>
        <div className='px-10 py-16 text-left font-bold'>
          <h1 className='text-4xl sm:text-6xl md:text-8xl'>
            About Me
          </h1>
          <h2 className='text-xl sm:text-3xl md:text-4xl text-[#f7aeae]'>
            <span className='blinking-cursor'>{word}</span>
          </h2>
        </div>

        <div className=''>
          <div className='flex flex-col justify-start items-center w-full h-full'>
            <div className='max-w-[1000px] px-4'>
              <div>
                <p className='sm:text-left sm:text-2xl text-xl font-bold text-[#f9bbbb]'> Hi, my name is </p>
                <h1 className='sm:text-left text-2xl sm:text-4xl md:text-6xl font-bold'> Rudresh Patel </h1>
              </div>
              <div className='sm:text-left text-xl sm:text-2xl py-10 font-bold text-[#d2d4dc]'>
                <p>I am currently a senior at Georgia Tech and my computer science threads are Artificial Intelligence and Devices.
                   I am passionate about software engineering and applying problem-solving skills to formalize general problem statements into precise algorithmic solutions.
                   I have developed several projects based on multiple programming languanges, frameworks, and tools. Please visit Resume section to learn more about it.
                  </p>  
              </div>
              <div>
                <Link to="/resume">
                  <button className='text-[#ffffff] border-2 px-2 py-3 my-2 flex items-center hover:bg-[#ff5555] hover:border-[#ff5555]'>
                    View Resume <HiArrowNarrowRight className='ml-2'/>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About