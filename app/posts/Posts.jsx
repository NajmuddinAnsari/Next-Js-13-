import Link from 'next/link'

export default function Posts({posts}) {
    console.log(posts)
    return (
        <>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.name}</Link>
                </li>
            ))}
          </>
  )
}
