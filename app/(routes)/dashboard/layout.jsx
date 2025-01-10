import React from 'react'
import SideNavBar from './_components/SideNavBar'
import DashboardHeader from './_components/DashboardHeader'

function DashboardLayout ({children}) {
  return (
    <div className=''>
    <div className='hidden md:block md:w-64 h-screen fixed'>
        <SideNavBar/>
    </div>
    <div className='md:ml-64'>
      <DashboardHeader/>
       {children}</div>
   
    </div>
  )
}

export default DashboardLayout
