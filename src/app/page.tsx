"use client"
import { SignedOut, SignOutButton, UserProfile, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  // const user=useUser()
  // console.log(user)
  
  return (
    <div>
      hello world
      {/* <UserProfile/> */}
      <SignOutButton></SignOutButton>
      <SignedOut></SignedOut>
    </div>
  );
}
