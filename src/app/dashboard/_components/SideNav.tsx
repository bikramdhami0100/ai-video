"use client"
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideNav() {
  const MenuOption = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft
    },
    {
      id: 1,
      name: "Create New",
      path: "/dashboard/create",
      icon: FileVideo
    },
    {
      id: 1,
      name: "Upgrade",
      path: "/dashboard/upgrade",
      icon: ShieldPlus
    },
    {
      id: 1,
      name: "Account",
      path: "/dashboard/account",
      icon: CircleUser
    },
    // {
    //   id:1,
    //   name:"Dashboard",
    //   path:"/dashboard",
    //   icon:PanelsTopLeft
    // },

  ]
  const path = usePathname();
  return (
    <div >
      <div>
        {MenuOption.map((item, index: any) => {
          return (
            <Link href={item.path} key={item.id} >
              <div className={` ${path == item.path ? "bg-blue-500" : ""} flex gap-2 p-2 m-1 hover:bg-blue-600 rounded-lg border`}>
                {<item.icon />}  {item.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SideNav