import { type TodoCompleted, type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id, completed }: TodoCompleted) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompletedTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompletedTodo({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className="view">
      <input
        id={id}
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label htmlFor={id} className="">{title}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo({ id }) }}
      />
    </div>
  )
}
