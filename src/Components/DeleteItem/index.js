import './index.css'

const DeleteItem = props => {
  const {historyDetails, onClickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="history-item-container">
      <div className="history-item-details">
        <p className="time">{timeAccessed}</p>
        <div className="title-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="name-url">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-button">
        <button
          type="button"
          testid="delete"
          className="button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default DeleteItem
