import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
      <div className='bg-gray-500 flex justify-between p-3 text-xl text-white underline font-bold '>
          <Link href='/'>Home</Link>
          <Link href='/todos'>Todos</Link>
    </div>
  )
}
