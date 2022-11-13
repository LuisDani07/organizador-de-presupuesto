import { useState } from "react"

function AddExpense() {
  const [name, setName]=useState('');
  const [cost, setCost]=useState('');
  return (
      <form>
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