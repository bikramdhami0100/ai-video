import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return ( <div className=' flex  justify-center items-center w-full h-full '> 
  <div className=' mt-[10%]'>
    <SignUp/>
  </div>
</div>)
}