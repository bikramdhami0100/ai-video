"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function SelectTopic({onUserSelect}:any) {
    const [selectValue,setSelectValue]=useState();
    // console.log(selectValue)
    const option = ["Historical Facts", "Bed Time Story", "Motivational", "Fun Facts", "Custom Prompt", "Random AI Story", "Scary Story"]
    return (
        <div className='  w-[96%] m-auto'>
            <div className=' p-4'>
                <h2 className=' text-2xl text-blue-600  font-semibold '>Content</h2>
                <p>What is the topic of your video ?</p>
                <Select onValueChange={(value:any)=>{
                    setSelectValue(value);
                    value!="Custom Prompt"&&onUserSelect("topic",value)
                }}>
                    <SelectTrigger  className="w-full">
                        <SelectValue placeholder="Content type" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            option.map((item:any,index:number)=>{
                                return (
                                    <div key={index}>

                                        <SelectItem value={item}>{item}</SelectItem>
                                    </div>
                                )
                            })
                        }

                    </SelectContent>
                </Select>
                <div className=' w-full  mt-2'>
                     {selectValue=="Custom Prompt"&&<Textarea onChange={(e)=>{
                        onUserSelect("topic",e.target.value)
                     }}   placeholder='Write prompt on which you want to generate video' className='' />
                     }
                </div>
            </div>
        </div>
    )
}

export default SelectTopic