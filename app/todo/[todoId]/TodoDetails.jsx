import React from 'react'

export default function TodoDetails({todo}) {
  return (
      <div>
          <h1>{ todo.id}</h1>
          <h1>{ todo.title}</h1>
    </div>
  )
}
