import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-500 flex justify-around text-3xl text-white font-bold underline'>
      <Link href='/'>Home</Link>
    </div>
    
  )
}
