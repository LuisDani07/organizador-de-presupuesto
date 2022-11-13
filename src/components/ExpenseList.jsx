import ExpenseItem from './ExpenseItem';
function ExpenseList() {
    const expenses=[
        {id:1, name:"shopping", cost:50},
        {id:2, name:"holiday", cost:300},
        {id:3, name:"transportation", cost:70},
        {id:4, name:"fuel", cost:40},
        {id:4, name:"child care", cost:500}
    ]
  return (
         <ul>
            {expenses.map((expense)=>(
              <ExpenseItem id={expense.id}
               name={expense.name}
                cost={expense.cost}/>
            ))}
         </ul>
  )
}

export default ExpenseList