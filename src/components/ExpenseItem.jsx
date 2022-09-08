import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ExpenseItem = props => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id
    })
  }
  return (
    <li
      key={props.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {props.name}
      <div>
        <span className="d-inline-block" tabIndex="0" data-toggle="tooltip">
          <button className="btn btn-primary" type="button" disabled>
            ${props.cost}
          </button>
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} style={{cursor:"pointer"}}></TiDelete>
      </div>
    </li>
  )
}

export default ExpenseItem
