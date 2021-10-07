import  ExpenseItem  from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import { useState } from "react";

function App() {

  const data = [
    {
    title:'kolkata trip',
    amount:800,
    date:new Date(2021,8,26)
  },
  {
    title:'petrol',
    amount:560,
    date:new Date(2021,9,21)
  },
  {
    title:'food',
    amount:700,
    date:new Date(2021,11,1)
  }
]

const [filteredYear, setFilteredYear] = useState('2021')
console.log(filteredYear)

const changeYearFilter = (selectedYear) => {
  setFilteredYear(selectedYear)
}

  return (
    
    <div>
      <NewExpense></NewExpense>
      <ExpenseFilter selected={filteredYear} onchangeFilter = {changeYearFilter}></ExpenseFilter>
      <ExpenseItem
      title='Title'
      amount='Amount'
      date='Date'
      ></ExpenseItem><hr></hr>
      <ExpenseItem
      title={data[0].title}
      amount={data[0].amount}
      date={data[0].date}
      ></ExpenseItem>
      
      <ExpenseItem
      title={data[1].title}
      amount={data[1].amount}
      date={data[1].date}
      ></ExpenseItem>

<ExpenseItem
      title={data[2].title}
      amount={data[2].amount}
      date={data[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;


