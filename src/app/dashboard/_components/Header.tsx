import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between  w-full h-[65px] border '>
        <div className='flex gap-2 justify-center items-center'>
          <Image src={"/logo.png"} alt='image' width={40} height={40} className=' h-[40px] w-[40px]  rounded-full object-contain object-center contrast-100 list-image-none items-start hue-rotate-30' ></Image>
        <h2>AI Short Video</h2>
        </div>
        <div className=' flex justify-center items-center gap-2 m-2'> 
           <Button>Dashboard</Button>
            <UserButton/>
        </div>
    </div> 
  )
}

export default Header