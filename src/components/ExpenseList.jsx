import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
  const {expenses} = useContext(AppContext)
  
  return (
    <ul className="list-group">
      {expenses.map(expence => (
        <ExpenseItem id={expence.id} name={expence.name} cost={expence.cost} />
      ))}
    </ul>
  )
}

export default ExpenseList
