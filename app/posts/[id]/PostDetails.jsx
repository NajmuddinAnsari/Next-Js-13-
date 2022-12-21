import React from 'react'

export default function PostDetails({todo}) {
  return (
      <div>
          <h1>{ todo.name}</h1>
          <span>{ todo.email}</span>
    </div>
  )
}
