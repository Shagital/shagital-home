import React from 'react'
import { asset } from '../assets/asset'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="block mb-7 mx-4 md:mx-16 lg:mx-44 text-white mt-16 md:mt-24 overflow-hidden space-y-6 items-center">
        <div className='flex justify-between'>
            <img src={asset.logo} alt="" className='w-8'/>
            <p className='text-sm font-light'><span className='text-white/50'>{currentYear} </span>Shagital</p>
        </div>
    </div>
  )
}

export default Footer