import React from 'react'




const AuthLayout = ({children}) => {
  return (
    <div className='h-screen flex min-h-screen gap-5'>
        <div className='flex-2'>
          {children}
        </div>
        <div className='flex-1'>
          <h2 className='text-5xl font-bold'>Welcome for Authenication</h2>
        </div>
      
    </div>
  )
}

export default AuthLayout


