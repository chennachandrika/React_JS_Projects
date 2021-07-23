import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: []}

  componentDidMount = () => {
    this.setState({todoList: initialTodosList})
  }

  deleteTodo = event => {
    const currentTodoId = event.target.parentNode.id
    const todoId = parseInt(currentTodoId, 10)
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(item => item.id !== todoId),
    }))
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="app-container">
        <div className="todo-app-container">
          <h1 className="todo-app-heading">Simple Todos</h1>
          <ul className="todo-items">
            {todoList.map(item => (
              <TodoItem
                key={item.id}
                todoData={item}
                onClickDel={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
