import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="todoitem">
      <p className="todo">{title}</p>
      <button className="delete" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default UserProfile
