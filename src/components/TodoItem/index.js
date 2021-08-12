import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo
  const onDeleteClicked = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <h1 className="title">{title}</h1>
      <div className="button-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteClicked}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
