import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex items-center justify-between  flex-wrap ">
        <h1 className="text-lg font-semibold">💻 Dev story</h1>
        <nav className='flex space-x-5'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"*"}>Service</Link>
            <Link href={"/register"}>Register</Link>
            <Link href={"/login"}>Login</Link>
        </nav>
    </header>
  )
}

