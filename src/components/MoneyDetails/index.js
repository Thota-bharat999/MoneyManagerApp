// Write your code here
const MoneyDetails = props => {
  const {totalIncome, totalBalance, totalExpanses} = props

  return (
    <div className="bank-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt=" balance"
          className="bank-image"
        />
        <div className="balance-details">
          <p className="balance-description">Your Balance</p>
          <p className="money-description" data-testid="balanceAmount">
            RS{totalBalance}{' '}
          </p>
        </div>
      </div>
      <div className="balance-container color2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="bank-image"
        />
        <div className="balance-details">
          <p className="balance-description">Your Income</p>
          <p className="money-description" data-testid="incomeAmount">
            RS {totalIncome}
          </p>
        </div>
      </div>
      <div className="balance-container color3">
        <img
          src=" https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt=" expenses"
          className="bank-image"
        />
        <div className="balance-details">
          <p className="balance-description">Your Expenses</p>
          <p className="money-description" data-testid="expensesAmount">
            RS {totalExpanses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
