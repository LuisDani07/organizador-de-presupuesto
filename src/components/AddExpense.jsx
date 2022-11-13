import { useState, useContext } from "react"
import {AppContext} from '../context/AppContext'
function AddExpense() {
  const {dispatch, expenses}=useContext(AppContext);
  const [name, setName]=useState('');
  const [cost, setCost]=useState('');
  const onSubmit=(e)=>{
    e.preventDefault();


    const expense={
      id:(expenses.length)+1,
      name:name,
      cost:parseInt(cost)
    };

    dispatch({
      type:'ADD_EXPENSE',
      payload:expense
    })
     
  }
  return (
      <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-sm">
                <label for="name">Name</label>
                <input type="text" 
                required="required" 
                className="form-control" id="name" value={name}
                onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="col-sm">
                <label for="cost">Cost</label>
                <input type="text"
                required="required"
                className="form-control" id="cost"
                value={cost} onChange={(e)=>{
                  setCost(e.target.value)
                }} />
            </div>
              <div className="col-sm">
                <br />
                <button type="submit" 
                className="btn btn-primary">Save</button>
              </div>
          </div>
      </form>
  )
}

export default AddExpense