import React from 'react'
import { TiDelete } from 'react-icons/ti'

const ExpenseItem = props => {
  return (
    <li
      key={props.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {props.name}
      <div>
        <span
          className="d-inline-block"
          tabIndex="0"
          data-toggle="tooltip"
        >
          <button
            className="btn btn-primary"
            type="button"
            disabled
          >
            ${props.cost}
          </button>
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  )
}

export default ExpenseItem
