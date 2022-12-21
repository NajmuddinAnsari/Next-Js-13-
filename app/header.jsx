import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
      <div>
          <ul className='flex justify-around bg-slate-400 p-3 text-xl bold text-white underline'>
              <li>
                  <Link href={'/'}>Home</Link>
              </li>
              <li>
                  <Link href={'/todos'}>ToDos</Link>
              </li>
          </ul>
    </div>
  )
}
