import ToDoDetail from './ToDoDetail'
// const getTodo = async (id) => {
    
// }
export default async function ToDoDetailPage({params:{id}}) {
    console.log(id)
  return (
      <div>
          <ToDoDetail />
    </div>
  )
}
