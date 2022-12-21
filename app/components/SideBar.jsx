import Link from 'next/link'
import React from 'react'

export default function SideBar({todos}) {
  return (
    <div  className='hover:bg-gray-100 cursor-pointer m-1 p-2 text-lg  rounded-full'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link href={`/${todo.id}`}>
            {todo.id}
          </Link>
        </li>
      ))}
    </div>
  )
}
