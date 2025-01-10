"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LocationOption from '@/app/_utils/LocationOption';
import Image from 'next/image';
import Link from 'next/link';
import ThemeOptions from '@/app/_utils/ThemeOptions';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';
import { app } from '@/config/FirebaseConfig';
import { useRouter } from 'next/navigation';

const MeetingForm = ({setFormValue}) => {
const [Location, setLocation] = useState();
const [themeColor, setThemeColor] = useState();
const [eventName, setEventName] = useState();
const [duration, setDuration] = useState(15);
const [locationType, setLocationType] = useState();
const [locationUrl, setLocationUrl] = useState();
const {user} = useKindeBrowserClient();
const router = useRouter();

const db = getFirestore(app);

 useEffect(()=>{
  setFormValue({
    eventName: eventName,
    themeColor: themeColor,
    duration:duration,
    locationType: locationType,
    locationUrl: locationUrl
  })
 },[eventName,themeColor,duration,locationType,locationUrl])

const onCreateClick = async () => {
 const id = Date.now().toString();
 await setDoc(doc(db,'MeetingEvent',id),{
    id: id,
    eventName: eventName,
    themeColor: themeColor,
    duration:duration,
    locationType: locationType,
    locationUrl: locationUrl,
    businessId:doc(db,'Business',user?.email),
    createdBy:user?.email
 }).then(()=>{
    toast('New Meeting Event Created!');
    router.replace('/dashboard/meeting-type')
 })
}

  return (
    <div className='p-8'>
    <Link href={'/dashboard'}>
     <h2 className='flex gap-2'><ChevronLeft/>Cancel</h2>
    </Link>
    <div className='mt-4'>
        <h2 className='font-bold text-2xl my-4'>Create New Event</h2>
    <hr></hr>
    </div>
    <div className='flex flex-col my-4 gap-3'>
        <h2 className=' font-bold'>Event Name:</h2>
        <Input placeholder='Name Of Your Meeting Event'
        onChange={(event)=>setEventName(event.target.value)} />
        <h2 className='font-bold'>Duration</h2>
        
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
       <Button variant='outline' className='max-w-40'>{duration} Mins Duration</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuItem onClick={()=>setDuration(15)}>15 Mins</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setDuration(30)}>30 Mins</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setDuration(45)}>45 Mins</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setDuration(60)}>60 Mins</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>

    <h2 className=' font-bold'>Location:</h2>
    <div className='grid grid-cols-4 gap-4'>
        {LocationOption.map((option,index)=>(
           <div key={index} className={`border flex flex-col justify-center items-center p-3 rounded hover:bg-red-100 hover:border-red-200 cursor-pointer ${Location==option.name&&'bg-red-100 border-red-200'}`}
           onClick={()=>setLocationType(option.name)}>
        
            <Image src={option.icon} width={30} height={30} alt={option.name}/>
            <h2>{option.name}</h2>
           </div> 
        ))}
    </div>
    {locationType&&<>
    <h2 className='font-bold'>Add {Location} Url</h2>
    <Input placeholder='Add Url for the Meeting'
    onChange={(event)=>setLocationUrl(event.target.value)}/>
    </>}
    <h2 className=' font-bold'>Select Theme Colour</h2>
    <div className='flex justify-evenly'>
    {ThemeOptions.map((color,index)=>(
        <div key={index} className={`h-7 w-7 rounded-full ${themeColor==color&&'border-4 border-black'}`} style={{background:color}}
        onClick={()=>setThemeColor(color)}>

        </div>
    ))}
    </div>
    </div>
    <Button variant='destructive' className='w-full mt-9'
    disabled={(!eventName||!duration||!locationType||!locationUrl)} 
    onClick={()=>onCreateClick()}
    >Create</Button>
    </div>
    
  )
}

export default MeetingForm
