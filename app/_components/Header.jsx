"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header () {
  return (
    
      <div className='flex items-center justify-between p-5 shadow-sm bg-slate-100'>
        <Image src='/logo4.png' alt='' width={300} height={300}
        className='w-[150px] md:w-[100px]'/>
        <h1 className='hidden md:flex text-red-500 font-bold'>GENIUS-CANDELY</h1>
        <ul className='hidden md:flex gap-14 font-medium text-lg'>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Products</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact Us</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
        </ul>
      <div className='flex gap-5'>
      <LoginLink><Button variant="ghost">Log In</Button></LoginLink>
      <RegisterLink><Button variant='destructive'>Get Started</Button></RegisterLink>
      </div>
    </div>
  )
}

export default Header
