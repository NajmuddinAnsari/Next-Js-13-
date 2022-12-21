import Link from 'next/link'

export default function Posts({posts}) {
    console.log(posts)
    return (
        <>
            <h1>najmuddin asnari</h1>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/todos/${post.id}`}>{post.name}</Link>
                </li>
            ))}
          </>
  )
}
