"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import Duration from './_components/Duration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoader from './_components/CustomLoader';
function CreateNew() {
  const [formData,setFormData]=useState<any>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const handlerUserSelect=(fieldName:string,fieldValue:any)=>{
    console.log(fieldName,fieldValue);
    setFormData((pre:any)=>{
      return (
        {
          ...pre,
          [fieldName]:fieldValue
        }
      )
    });
    
  }
  const GetVideoScript=async()=>{
    setLoading(true);
   const prompt=`Write a script to generate ${formData?.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} for each scene and give me result in JSON format with imagePrompt and ContentText as field , No Plain text `
   console.log(prompt)
   const result=await axios.post("/api/get-video-script",{prompt:prompt}).then((res)=>{
    console.log(res.data);
    const resultNewdata=JSON.parse(res?.data?.result);
    console.log(resultNewdata)
   }).catch((err)=>{
    console.log(err);
   })
   setLoading(false);
  }
  const onCreateClickHandler=()=>{
    GetVideoScript()
  }
  console.log(formData)
  return (
    <div>
    <h2 className='  text-center  text-blue-600  font-bold text-2xl p-2'>Create New </h2>
    <div className=' border w-[90%] m-auto'>
         {/* Select Topic */}
         <SelectTopic onUserSelect={handlerUserSelect}/>
         {/* select style */}
         <SelectStyle onUserSelect={handlerUserSelect}/>
         {/* Duration */}
         <Duration onUserSelect={handlerUserSelect} />
         {/* Create Button */}
         <Button onClick={()=>{
          onCreateClickHandler();
         }} className=' mt-2 m-auto w-[96%] self-center'>Create Video</Button>
    </div>
      <CustomLoader loading={loading}/>
    </div>
  )
}

export default CreateNew