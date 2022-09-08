import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const expenses = [
    { id: '12dsa', name: 'Shopping', cost: 50 },
    { id: '12311', name: 'Holiday', cost: 300 },
    { id: '12313', name: 'Transportation', cost: 70 },
    { id: '12314', name: 'Fuel', cost: 40 },
    { id: '12315', name: 'Child Care', cost: 500 }
  ]
  return (
    <ul className="list-group">
      {expenses.map(expence => (
        <ExpenseItem id={expence.id} name={expence.name} cost={expence.cost} />
      ))}
    </ul>
  )
}

export default ExpenseList
