import React from 'react'

const Hero = () => {
  return (
    <div className='text-center text-white py-7 md:py-14'>
        <h1 className='text-[28px] leading-normal lg:leading-16 md:leading-14 md:text-5xl font-extrabold bg-gradient-to-br from-[#FFEED0] to-[#DC8B00] bg-clip-text text-transparent'>
            <span className='underline text-[#FFEED0]'>SHAGITAL</span> IS A NIGERIAN <br />BASED TECHNOLOGY <br /> COMPANY
        </h1>
        <p className='text-[16px] md:text-xl mt-2 md:mt-4 leading-relaxed mx-5 font-light'>
            {/* SHAGITAL IS A NIGERIAN BASED TECHNOLOGY COMPANY, BUILDING <br className='hidden md:block'/>PRODUCTS WE WISHED HAVE EXISTED, IN A PURPOSE-DRIVEN CULTURE,<br className='hidden md:block'/> HELPING HUMANITY, AND MAKING AFRICA BETTER THAN IT WAS YESTERDAY. */}
            Shagital is a nigerian based technology company, building products we wished have existed, <br className='hidden md:block'/>in a purpose-driven culture, helping humanity, and making africa <br className='hidden md:block'/>better than it was yesterday.
        </p>
        <div className='mt-5 md:mt-7 flex text-center justify-center gap-3 md:gap-6'>
            <a href='#project' className='px-4 py-3 border border-[#DC8B00] rounded-full text-sm md:text-lg cursor-pointer hover:bg-[#DC8B00] transition duration-500 hover:text-white text-[12px]'>VIEW PROJECTS</a>
            <a href='#contact' className='px-4 py-3 text-[12px] bg-[#DC8B00] rounded-full text-sm md:text-lg cursor-pointer hover:bg-[#dc7900] transition duration-500 hover:text-white'>CONTACT US</a>
        </div>
    </div>
  )
}

export default Hero