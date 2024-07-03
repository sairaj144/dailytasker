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

// Write your code here
class SimpleTodos extends Component {
  state = {
    usersDetailsList: initialTodosList,
  }

  deleteUser = id => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(each => each.id !== id)
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {usersDetailsList} = this.state

    return (
      <div className="app-container">
        <div className="card">
          <h1 className="title">Simple Todos</h1>
          <ul className="list-container">
            {usersDetailsList.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
