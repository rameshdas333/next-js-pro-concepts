import React from 'react'

export default function Title({children}) {
  return (
    <div className=' bg-linear-60  from-sky-50 to-sky-200 p-4 rounded-2xl'>
         <h1 className='text-4xl font-bold text-center'>{children}</h1>
    </div>
  )
}
