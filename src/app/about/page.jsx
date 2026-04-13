import Title from '@/app/components/Title'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
    <Title>Hello About</Title>
   <div className='flex gap-4'>
     <Link href={"/about/contact"}>Contact</Link>
    <Link href={"/about/teams"}>Teams</Link>
   </div>
    </div>
  )
}
