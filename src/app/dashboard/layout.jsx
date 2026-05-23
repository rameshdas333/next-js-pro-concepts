import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-3 border-r-2 h-screen p-5'>
           <Link href="/dashboard/add-story" className='block p-2 hover:bg-gray-200 font-bold'>Add Story</Link>
           <Link href="/dashboard/my-profile" className='block font-bold p-2 hover:bg-gray-200'>My Profile</Link>
           <Link href="/dashboard/settings" className='block p-2 hover:bg-gray-300 font-bold'>Settings</Link>
        </div>
        <div className='col-span-9 pr-5'>
            {children}
        </div>
        
      
    </div>
  )
}

export default DashboardLayout
