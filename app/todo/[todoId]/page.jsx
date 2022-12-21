import React from 'react'

export default async function TodoDetailsPage({params}) {
    const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const todo = await res.json();
  return (
      <div>
      {/* <TodoDetailsPage todo={ todo} /> */}
      <p>todo details page</p>
    </div>
  )
}
