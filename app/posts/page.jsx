import Posts from "./Posts";

const getPosts = async () => {
    const res =await fetch("https://jsonplaceholder.typicode.com/users");
    return  res.json()
}
export default async function PostPage() {
    const posts = await getPosts();
    // console.log(posts)
  return (
      <div>
          <Posts posts={posts} />
          <h1>todos page</h1>
    </div>
  )
}
