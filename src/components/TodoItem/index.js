import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser, changename, editTitle} = props
  const {title, id, isedit} = userDetails
  let tit = title

  const onDelete = () => {
    deleteUser(id)
  }

  const changebtn = () => {
    changename(id)
  }

  const handleChange = event => {
    tit = event.target.value
    editTitle(id, tit)
  }

  const newbtn = isedit ? 'Save' : 'Edit'

  return (
    <li className="todoitem">
      {isedit ? (
        <input type="text" value={tit} onChange={handleChange} />
      ) : (
        <p className="todo">{title}</p>
      )}

      <div className="btnblock">
        <button className="delete" onClick={changebtn} type="button">
          {newbtn}
        </button>
        <button className="delete" onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default UserProfile
