import React from 'react'

const Hero = () => {
  return (
    <div className='h-[824px] w-[1920px] bg-[#043873] flex justify-center items-center py-[140px] px-[220px]'>

      <div className='flex flex-col gap-[60px]'>
      <h2 className=' font-medium text-white text-[64px] leading-relaxed'>Get More Done with whitepace</h2>
      <p className='font-normal text-lg leading-8 text-white '>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
      <div>
        <button className='bg-[#4F9CF9] p-5 gap-[10px] rounded-lg text-white'>Try White Space Free</button>
      </div>
      </div>


      <div className='bg-[#C4DEFD] h-[549px] w-[824px] gap-1'>

      </div>
     
    </div>
  )
}

export default Hero
