import './index.css'

const TodoItem = props => {
  const {todoData, onClickDel} = props
  const {title, id} = todoData
  return (
    <li className="todo" id={id}>
      <p className="todo-title">{title}</p>
      <button onClick={onClickDel} type="button" className="todo-del-button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
