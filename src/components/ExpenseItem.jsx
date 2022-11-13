

function ExpenseItem({id, name, cost}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {name}
        <div>
            <span className="badge badge-primary badge-pill mr-3 bg-success">
                ${cost}
            </span>
            <button className="btn btn-danger">Delete</button>
        </div>
    </li>
  )
}

export default ExpenseItem