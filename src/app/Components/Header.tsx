import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='h-[92px] w-[1920px] bg-[#043873] flex justify-between items-center py-4 px-[220px] '>
        <div className='w-1/2'>
        <Image
        src="/Logo.png"
        width={191}
        height={34}
        alt=''/>
</div>

    <div className='flex justify-between w-1/2 items-center '>
        <ul className='flex gap-[60px] text-white'>
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
        </ul>
        
        <button className='py-4 px-10 rounded-lg bg-[#FFE492]'>
            Login
        </button>
        
        </div>
      
    </div>
  )
}

export default Header
