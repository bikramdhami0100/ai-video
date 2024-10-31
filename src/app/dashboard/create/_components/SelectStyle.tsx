"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}:any) {
    const [selectStyle,setSelectStyle]=useState<any>()
    const styleOption=[
        {
            name:"Realistic",
            image:"/real.jpg",

        },
        {
            name:"Cartoon",
            image:"/cartoon.jpg",

        },
        {
            name:"Comic",
            image:"/comic.jpg",

        },
        {
            name:"WaterColor",
            image:"/watercolor.jpg",

        },
        {
            name:"GTA",
            image:"/gta.jpg",

        },
    ]
  return (
    <div className='  w-[96%] m-auto'>
    <div className=' p-4'>
        <h2 className=' text-2xl text-blue-600  font-semibold '>Style</h2>
        <p>Select your video style</p>
         <div className='flex  flex-wrap  justify-start items-center gap-4'>
         {
            styleOption.map((item,index)=>{
                return (
                    <div onClick={()=>{
                        setSelectStyle(item.name)
                        onUserSelect("imageStyle",item.name)
                    }} className={`hover:scale-105 cursor-pointer transition-all duration-500 ${selectStyle==item.name ?"border-[3px] border-blue-600 rounded-xl":""}`}>
                       <div  >
                       <Image className='  rounded-t-lg  h-80 w-48  object-cover  ' src={item.image}  alt={item.name} width={100} height={100}></Image>
                       <p className=' bg-black mt-0 text-white text-center rounded-b-lg'>{item.name}</p>
                       </div>
                    </div>
                )
            })
        }
         </div>
       
        </div>
    </div>

  )
}

export default SelectStyle