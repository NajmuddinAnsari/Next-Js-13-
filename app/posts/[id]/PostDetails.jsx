import React from 'react'

export default function PostDetails({post}) {
  return (
      <div>
          <h1>{ post.name}</h1>
          <span>{ post.email}</span>
    </div>
  )
}
