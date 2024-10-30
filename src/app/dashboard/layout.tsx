import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

function DashboardLayout({ children }: any) {
  return (
    <div>
      <div className=' h-[65px] flex '>
        <Header></Header>
      </div>
      <div className='flex '>
        <div className=' hidden md:block  lg:block border w-[20%] h-screen'>
          <SideNav />
        </div>
        <div className=' w-full'>
          {children}
        </div>
      </div>


    </div>
  )
}

export default DashboardLayout