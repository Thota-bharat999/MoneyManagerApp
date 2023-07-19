// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeletedButton} = props
  const {id, title, amount, option} = transactionDetails

  const onClickDelete = () => {
    onDeletedButton(id)
  }

  return (
    <li>
      <p className="name">{title}</p>
      <p className="name">{amount}</p>
      <p className="name">{option}</p>
      <button
        type="button"
        className="delete-button "
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
