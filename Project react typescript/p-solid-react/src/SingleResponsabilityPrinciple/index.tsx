import { useFetchTodo } from "./hooks/useFetchTodo";

export const TodoList = () => {
 
  const { todos, isFetching} = useFetchTodo();


  if (isFetching) return <p>...loading</p>

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.id}</span>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  )
}