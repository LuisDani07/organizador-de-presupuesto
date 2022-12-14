import Budget from './components/Budget'
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import {AppProvider} from './context/AppContext'
function App() {
  

  return (
<AppProvider>
     <div className="container">
                  <h1 className="mt-3">my budget planner</h1>
                  <div className="row mt3">
                     <div className="col-sm ">
                          <Budget/>
                     </div>
                     <div className="col-sm">
                          <Remaining/>
                     </div>
                     <div className="col-sm">
                          <ExpenseTotal/>
                     </div>
                  </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList/>
          </div>
        </div>
        <h3 className="mt-3">Add expense</h3>
        <div className="mt-3">
          <div className="col-sm">
                 <AddExpense/>
          </div>
        </div>
    </div>
</AppProvider>


  )
}

export default App
