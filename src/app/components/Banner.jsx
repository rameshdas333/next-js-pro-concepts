"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Banner = () => {

    const router = useRouter()

const handleBookNow = () => {
    const password = prompt("Please enter your password")
    if(password == "1234"){
        router.push("/dashboard")

    }  } 
  return (
    <div>
 
    <section className="flex flex-col items-center justify-center rounded-3xl p-10  bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-6">
        Dev Story
      </h2>

      <button onClick={handleBookNow} className="px-6 py-3 bg-blue-600  cursor-pointer hover:bg-blue-700 rounded-xl text-lg font-semibold transition duration-300">
        Book Now
      </button>
    </section>
 

    </div>
  )
}

export default Banner
