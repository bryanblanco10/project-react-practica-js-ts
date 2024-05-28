import { type TODO_FILTERS } from './consts'
type TypeId = `${string}-${string}-${string}-${string}-${string}`
export interface Todo {
  id: TypeId
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'id' | 'completed'>
export type ListOfTodos = Todo[]

// typeof TODO_FILTERS[keyof typeof TODO_FILTERS], aqui le estoy diciendo que utilice cualquier de los TODO_FILTERS que he declarado
// en la const, es lo mismo que tener typeof TODO_FILTERS['all'], pero aqui lo estoy limitando a que siempre debe ser all
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
