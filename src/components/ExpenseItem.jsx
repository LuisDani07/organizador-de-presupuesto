import { useContext } from 'react';
import {AppContext} from '../context/AppContext';

function ExpenseItem({id, name, cost}) {
  const {dispatch}=useContext(AppContext);

  const handleDeleteExpense=()=>{
    dispatch({
      type:'DELETE_EXPENSE',
      payload:id
    })
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {name}
        <div>
            <span className="badge badge-primary badge-pill mr-3 bg-success">
                ${cost}
            </span>
            <button onClick={handleDeleteExpense} className="btn btn-danger">Delete</button>
        </div>
    </li>
  )
}

export default ExpenseItem