import {AppContext} from '../context/AppContext'
import {useContext} from 'react'

function Remaining() {
  const {expenses, budget}=useContext(AppContext);
  const totalExpenses=expenses.reduce((total, item)=>{
    return total=total+item.cost;
  },0)
  return (
      <div className="alert alert-success">
        <span>Remaining: ${budget-totalExpenses}</span>
      </div>
  )
}

export default Remaining