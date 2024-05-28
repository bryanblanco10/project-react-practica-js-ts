import axios from "axios";
import type { TodoType } from "../types";
export const getTodos = () => {
  return axios
    .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data)
};
