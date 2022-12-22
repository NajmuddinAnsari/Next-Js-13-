import PostDetails from "./PostDetails";
import { notFound } from 'next/navigation';

const getPost = async (id) => {
    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}
  
export default async function page({ params }) {
  console.log(params)
  const post = await getPost(params.id);
  if(!post)
  {
    alert("pos")
    return <notFound />
  }
  console.log(post)
  return (
    <div>
      <PostDetails post={post} />
    </div>
  )
}
