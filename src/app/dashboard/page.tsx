"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';

function Dashboard() {
  const [videoList,setVideoList]=useState([]);

  return (
    <div className=' w-full'>
         <div className=' p-2 flex justify-between w-full items-center  '>
             <div>Dashboard</div>
               <Button>+ Create New</Button>
              
         </div>
          <div>
            {
              videoList.length==0&& <EmptyState/>
            }
          </div>
    </div>
  )
}

export default Dashboard