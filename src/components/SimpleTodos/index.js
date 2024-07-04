import {Component} from 'react'

import UserProfile from '../TodoItem'

import './index.css'

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

const iniList = initialTodosList.map(each => {
  const newarr = {...each, isedit: false}
  return newarr
})
// Write your code here
class SimpleTodos extends Component {
  state = {
    usersDetailsList: iniList,
    newval: '',
    newid: 9,
    isedit: false,
  }

  handleChange = ent => {
    this.setState({newval: ent.target.value})
  }

  handleAddTodo = () => {
    const {usersDetailsList, newval, newid} = this.state
    let n = newval.slice(-1)
    const repVal = newval.slice(0, -1)
    if (Number(n)) {
      n = parseInt(n)
      let i = 0
      let newlist = usersDetailsList
      let repeatId = newid
      while (i < n) {
        newlist = [...newlist, {id: repeatId, title: repVal, isedit: false}]
        repeatId += 1
        i += 1
      }
      this.setState({
        usersDetailsList: newlist,
        newval: '',
        newid: newlist.length + 1,
      })
    } else {
      const newlist = [
        ...usersDetailsList,
        {id: newid, title: newval, isedit: false},
      ]
      this.setState({
        usersDetailsList: newlist,
        newval: '',
        newid: newlist.length + 1,
      })
    }
  }

  changename = id => {
    const {usersDetailsList} = this.state
    const updatedTodoList = usersDetailsList.map(todo =>
      todo.id === id ? {...todo, isedit: !todo.isedit} : todo,
    )

    this.setState({usersDetailsList: updatedTodoList})
  }

  editTitle = (id, updtitle) => {
    const {usersDetailsList} = this.state
    const updatedTodoList = usersDetailsList.map(todo =>
      todo.id === id ? {...todo, title: updtitle} : todo,
    )

    this.setState({usersDetailsList: updatedTodoList})
  }

  deleteUser = id => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(each => each.id !== id)
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {usersDetailsList, newval} = this.state

    return (
      <div className="app-container">
        <div className="card">
          <h1 className="title">Simple Todos</h1>
          <div className="insertcard">
            <input
              type="text"
              value={newval}
              onChange={this.handleChange}
              placeholder="Enter todo title"
            />
            <button
              className="addbtn"
              onClick={this.handleAddTodo}
              type="button"
            >
              Add
            </button>
          </div>
          <ul className="list-container">
            {usersDetailsList.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.id}
                deleteUser={this.deleteUser}
                changename={this.changename}
                editTitle={this.editTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
