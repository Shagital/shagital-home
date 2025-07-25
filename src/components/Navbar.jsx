import React from 'react'
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { asset } from '../assets/asset';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {name: "PROJECTS", href: "#project"},
    {name: "CONTACT", href: "#contact"},
    {name: "PRIVACY POLICY", href: "#"},
    {name: "TERMS", href: "#"},
  ]
  return (
    <div className='m-4 md:mx-7 md:my-7 lg:mx-9 lg:my-9 text-white scroll-smooth'>
      <nav className='backdrop-blur-3xl bg-white/10 flex items-center justify-between rounded-full px-4 py-3 md:px-6'>
        <img src={asset.logo} alt="navbar-logo" className='w-9 rounded'/>
        <div className='hidden md:flex gap-6 lg:gap-12'>
          {navLinks.map((link)=>(
            <div key={link.name}>
              <a href={link.href} className='text-sm text-white hover:underline hover:text-[#DC8B00] transition duration-200 cursor-pointer'>{link.name}</a>
            </div>
          ))}
        </div>
        <button className='hidden md:block text-sm px-3 py-2 border rounded-full border-[#DC8B00] cursor-pointer hover:bg-[#DC8B00] transition duration-500 hover:text-white'>CONTACT US</button>
        <div className='block md:hidden text-sm px-1.5 py-1.5 border rounded border-[#DC8B00] cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? <HiX className='text-xl'/> : <HiMenu className='text-xl'/>}
        </div>
      </nav>
      {isOpen? <div className='relative'>
        <div className='absolute right-0 bg-white/10 px-5 py-4 rounded-2xl top-2 flex flex-col gap-5 backdrop-blur-xl'>
          {navLinks.map((link)=>(
            <div key={link.name}>
              <a href={link.href} className={`text-sm text-white `} onClick={()=>setIsOpen(!isOpen)}>{link.name}</a>
            </div>
          ))}
        </div>
      </div> : null}
    </div>
  )
}

export default Navbar