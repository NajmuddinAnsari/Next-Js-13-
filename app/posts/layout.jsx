import Posts from "./Posts"
const getPosts = async () => {
    const res =await fetch("https://jsonplaceholder.typicode.com/users");
    return  res.json()
}
export default async function PostLayout({ children }) {
     const posts = await getPosts();
  return (
      <div className="flex">
          <div>
              <Posts posts={posts} />
         </div>
        <main>{children}</main>
      </div>
    
  );
}

