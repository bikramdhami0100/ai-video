import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
    return (
        <div>
            <div className=' w-[90%]  h-60 border border-dashed m-auto flex justify-center items-center' >
                <div className=' flex-col justify-center items-center'> 
                    <p>You don't have any short video created</p>
                     <Link href={"/dashboard/create"}> <div className=' items-center flex justify-center '><Button className=' self-center text-center '>Create New Short Video</Button></div></Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyState