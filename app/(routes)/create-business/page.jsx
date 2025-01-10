"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

const CreateBusiness = () => {
const [businessname, setBusinessname] = useState();
const db = getFirestore(app);
const {user} = useKindeBrowserClient();
const router = useRouter();

const onCreateBusiness =async () => {
console.log("button click", businessname);
await setDoc(doc(db, 'Business', user.email),{
    businessName: businessname,
    email: user.email,
    userName: user.given_name+" "+user.family_name
}).then(resp => {
   console.log("document saved"); 
   toast('New Business Has been Created!');
   router.replace('/dashboard')
})
}
  return (
    <div className='flex flex-col p-14 items-center gap-20 my-10'>
     <Image src='/genius.png' width={200} height={200}/>
     <div className='flex flex-col items-center gap-4 max-w-3xl'>
     <h2 className='text-4xl font-bold'>What should we call your business?</h2>
     <p className='text-slate-500'>you can always change this later from settings</p> 
     <div className='w-full'>
        <label className='text-slate-400'>Team Name</label>
        <Input placeholder='Ex. Geniusworld' className='mt-4'
        onChange={(event) => setBusinessname(event.target.value)}/>
     </div>
     <Button variant='destructive' className='w-full' disabled = {!businessname}
     onClick={onCreateBusiness}>Create Business</Button>
     </div> 
     </div>
  )
}

export default CreateBusiness
