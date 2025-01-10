"use client"
import { Button } from '@/components/ui/button'
import { Briefcase, Calendar, Clock, Plus, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SideNavBar = () => {
    const Menu = [
        {
            id:1,
            name: 'Meeting Type',
            path: '/dashboard/meeting-type',
            icon: Briefcase
        },
        {
            id:2,
            name: 'Scheduled Meeting',
            path: '/dashboard/scheduled-meeting',
            icon: Calendar
        },
        {
            id:3,
            name: 'Availability',
            path: '/dashboard/availability',
            icon: Clock
        },
        {
            id:4,
            name: 'Settings',
            path: '/dashboard/settings',
            icon: Settings
        },
    ]
    const path = usePathname();
    const [activePath, setActivePath] = useState(path);

    useEffect(()=>{
    path&&setActivePath(path)
    },[path])
  return (
    <div className='p-5 py-15'>
        <div className='flex flex-col justify-start items-center gap-2'>
        <Image src='/logo4.png' width={100} height={100} alt='logo'/>
        <h1 className=' text-red-500 font-bold'>GENIUS-CANDELY</h1>
        </div>
        <Link href='/create-meeting'>
        <Button className='flex gap-2 w-full rounded-full mt-7 justify-start' variant='destructive'><Plus/>Create a Meeting</Button>
        </Link>
        <div className='mt-5 flex flex-col gap-5'>
         {Menu.map((item,index)=>(
             <Link href={item.path} key={index}><Button className={`w-full flex gap-2 justify-start hover:bg-red-100 text-black ${activePath==item.path&&'text-black bg-red-200'}`} variant='ghost' key={index}>
            <item.icon/>{item.name}</Button></Link>
         ))}   
        </div>
    </div>
  )
}

export default SideNavBar
