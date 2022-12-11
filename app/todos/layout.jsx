import React from 'react'

export default async function TodosLayout ({children}) {
    const res=await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json();
    console.log(todos)
  return (
      <div>
          {children}
    </div>
  )
}
