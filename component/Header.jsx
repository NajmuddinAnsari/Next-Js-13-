import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    //   <div className='bg-gray-500'>
    //       <ul className='flex justify-between  p-3'>
    //           <li >
    //               <Link className='text-lg' href='/'>Home</Link>
    //           </li>
    //           <li >
    //               <Link className='text-lg' href='/todos'>Todos</Link>
    //           </li>
    //       </ul>
    // </div>
     
          <div>
                   <Link className='text-lg' href='/'>Home</Link>
              <h1 className='bg-red-300 font-bold'>i am header</h1>
          </div>
    
  )
}
