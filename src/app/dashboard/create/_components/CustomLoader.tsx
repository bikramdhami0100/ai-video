import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  
function CustomLoader({loading}:any) {
  return (
    <div>
     <AlertDialog open={loading}>
  <AlertDialogContent className=' bg-white text-black'>
     <div className=' w-full flex flex-col justify-center items-center '>
     <Image  src={"/soon.gif"} alt='gif' height={100} width={100}></Image>
     Loading...
     </div>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default CustomLoader