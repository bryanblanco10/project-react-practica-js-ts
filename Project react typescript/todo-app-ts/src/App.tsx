import { useState, type ReactElement } from 'react'
import { Todos } from './components/Todos'
import { type TodoTitle, type FilterValue, type TodoCompleted, type TodoId, type Todo } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: crypto.randomUUID(),
    title: 'Estudiar Ingles',
    completed: true
  },
  {
    id: crypto.randomUUID(),
    title: 'Estudiar React',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Trabajar',
    completed: false
  }
]
const App = (): ReactElement => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: TodoCompleted): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleClearCompleted = (): void => {
    console.log('Enmtre')
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCound = todos.filter(todo => todo.completed).length

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [
      ...todos,
      newTodo
    ]

    setTodos(newTodos)
  }
  return (
    <>
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleTodo}
        onCompletedTodo={handleCompleted}
      />
      <Footer
        completedCound={completedCound}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </div>
    </>
  )
}

export default App
