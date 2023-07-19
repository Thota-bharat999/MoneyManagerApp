import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    option: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({option: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, option} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === option,
    )

    const {displayText} = typeOption
    console.log(displayText)
    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newTransaction],
      title: '',
      amount: '',
      option: transactionTypeOptions[0].optionId,
    }))
  }

  onDeletedButton = id => {
    const {historyList} = this.state
    const filterHistory = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterHistory})
  }

  getBalance = () => {
    const {historyList} = this.state
    let totalIncome = 0
    let totalBalance = 0
    let totalExpanses = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
      } else {
        totalExpanses += each.amount
      }
      totalBalance = totalIncome - totalExpanses
    })
    return totalBalance
  }

  getExpenses = () => {
    const {historyList} = this.state
    let totalExpanses = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        totalExpanses += each.amount
      }
    })
    return totalExpanses
  }

  getIncome = () => {
    const {historyList} = this.state
    let totalIncome = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
      }
    })
    return totalIncome
  }

  render() {
    const {title, amount, option, historyList} = this.state
    console.log(this.getIncome())
    return (
      <div className="bg-container">
        <>
          <div className="card-container">
            <h1 className="card-heading">Hi, Richard</h1>
            <p className="card-description">
              Welcome back to Your <span>Money Manger</span>
            </p>
          </div>
          <MoneyDetails
            totalIncome={this.getIncome()}
            totalExpanses={this.getExpenses()}
            totalBalance={this.getBalance()}
          />
          <div className="bank-history-container">
            <form onSubmit={this.addTransaction}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <div className="input-container">
                <label htmlFor="form-title" className="flex">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="TITLE"
                  className="input-title"
                  id="form-title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
              </div>
              <div className="input-container">
                <label htmlFor="form-income" className="flex">
                  AMOUNT
                </label>
                <input
                  type="text"
                  placeholder="TITLE"
                  className="input-title"
                  id="form-income"
                  onChange={this.onChangeAmount}
                  value={amount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="select-option" className="flex">
                  TYPE
                </label>
                <select
                  id="select-option"
                  className="input-title"
                  onChange={this.onChangeType}
                  value={option}
                >
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
            <div className="history-container">
              <h1 className="transaction-heading">History</h1>
              <ul>
                <li>
                  <p className="name">Title </p>
                  <p className="name">Amount</p>
                  <p className="name">Type</p>
                </li>
                {historyList.map(each => (
                  <TransactionItem
                    transactionDetails={each}
                    key={each}
                    onDeletedButton={this.onDeletedButton}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      </div>
    )
  }
}
export default MoneyManager
