
function AddExpense() {
  return (
      <form>
          <div className="row">
            <div className="col-sm">
                <label for="name">Name</label>
                <input type="text" 
                required="required" 
                className="form-control" id="name"/>
            </div>
            <div className="col-sm">
                <label for="cost">Cost</label>
                <input type="text"
                required="required"
                className="form-control" id="cost" />
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