import Logo from '../assets/images/logo.webp'
import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'
interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        Todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src={Logo}
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
