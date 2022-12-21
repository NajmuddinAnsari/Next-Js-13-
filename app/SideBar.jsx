import Link from 'next/link'
import React from 'react'

export default function SideBar({todos}) {
  return (
     <>
      {todos.map((todo) => (
        <li className='mb-3 p-3 hover:bg-slate-200 cursor-pointer border-r-4 rounded-full'  key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
            </li>
          ))}
    </>
  )
}
