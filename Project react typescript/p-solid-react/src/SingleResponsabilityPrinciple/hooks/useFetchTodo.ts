
import { useEffect, useState } from  "react"
import type { TodoType } from "../types";
import { getTodos } from "../services";

export const useFetchTodo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getTodos()
      .then(todos => setTodos(todos))
      .finally(() => setIsFetching(false))
  }, [])

  return {
    todos,
    isFetching
  }
}