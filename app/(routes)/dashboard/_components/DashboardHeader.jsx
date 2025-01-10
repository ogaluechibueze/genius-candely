"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Briefcase, Calendar, ChevronDown, Clock, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

function DashboardHeader () {
const {user} = useKindeBrowserClient();

  return user&& (
    <div className='p-4 flex items-center justify-between'>
      <div>
        <Image src='/logo4.png' width={100} height={100} className=' md:hidden'/>
      </div>
    <div className='font-bold md:hidden'>
    <DropdownMenu>
    <DropdownMenuTrigger className='flex items-center float-right'>
    <h1 className='text-red-500 font-bold'>GENIUS-CANDELY</h1>
    <ChevronDown/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuLabel>MENU</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href='/create-meeting'>
    <DropdownMenuItem><Plus/>Create Meeting</DropdownMenuItem>
    </Link>
    <Link href='/dashboard/meeting-type'>
    <DropdownMenuItem><Briefcase/>Meeting Type</DropdownMenuItem>
    </Link>
    <Link href='/dashboard/scheduled-meeting'>
    <DropdownMenuItem><Calendar/>Scheduled Meeting</DropdownMenuItem>
    </Link>
    <Link href='/dashboard/availability'>
    <DropdownMenuItem><Clock/>Availability</DropdownMenuItem>
    </Link>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
    <div>
    <DropdownMenu>
    <DropdownMenuTrigger className='flex items-center float-right'>
    <Image src={user?.picture} alt='logo' width={40} height={40} className=' rounded-full'/>
    
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuItem>
    <LogoutLink>Logout</LogoutLink>
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </div>
  )
}

export default DashboardHeader
