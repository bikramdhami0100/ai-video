"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import db from './config/db';
import { Users } from './config/schema';
import { eq } from 'drizzle-orm';

function Provider({children}:any) {
  const{user}:any=useUser();
  const isNewUser=async () => {
     const result=await db.select().from(Users).where(eq(Users.email,user?.user?.primaryEmailAddress?.emailAddress));
     console.log("result is ", result.length)
     if(result.length<1 ){
      await db.insert(Users).values({
        name:user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl:user?.imageUrl,
        subscription:false
        // subscription:
      })
     }
  }
  useEffect(() => {
    user&& isNewUser()
  }, [user])
  
  // console.log( "this is user",user?.imageUrl)
  return (
    <div>{children}</div>
  )
}

export default Provider