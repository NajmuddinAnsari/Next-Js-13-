import PostDetails from "./PostDetails";

const getTodo = async (id) => {
    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}
  
export default async function page({ params }) {
  console.log(params)
  const todo = await getTodo(params.id);
  console.log(todo)
  return (
    <div>
      <PostDetails todo={todo} />
    </div>
  )
}
