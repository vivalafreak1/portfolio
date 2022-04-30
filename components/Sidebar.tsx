/* eslint-disable */

import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
        <img 
            src='https://d17ivq9b7rppb3.cloudfront.net/small/avatar/20210720202845b5d11ec5b74de2ccf103f447f73b4a36.png'
            alt='user avatar'
            className='w-32 h-32 mx-auto rounded-full'
        />
        <h3 className='my-4 text-xl font-medium tracking-wider font-poppins'>
            <span>Arief </span>
             Taufik Rahman
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>
                Web Developer
            </p>
            <a 
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
                href=''
                download='name'>
                <GiTie className='w-6 h-6'/>Download Resume
            </a>
            {/*social icon*/}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-black md:w-full'>
                <a href="https://github.com/vivalafreak1" target="_blank">
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="https://www.linkedin.com/in/eddiesti/" target="_blank">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>
            {/* Address */}
            <div 
                className='py-4 my-5 bg-gray-200' 
                style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Jakarta, Indonesia</span>
                </div>
                <p className='my-2'>arief@gmail.com</p>
                <p className='my-2'>+6285564346533</p>
            </div>
            {/* Email Button */}
            <button 
                className='w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-black to-black-dark focus:outline-none'
                onClick={() => window.open('mailto:arief@gmail.com')}>
                Email me
            </button>
            <button className='w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-black to-black-dark '>
                Toggle Theme
            </button>
    </div>
  )
}

export default Sidebar