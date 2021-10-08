import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import { useState } from "react";

const DummyExpenseData = [
  {
    id: 1,
    title: "kolkata trip",
    amount: 800,
    date: new Date(2021, 8, 26),
  },
  {
    id: 2,
    title: "petrol",
    amount: 560,
    date: new Date(2021, 9, 21),
  },
  {
    id: 3,
    title: "food",
    amount: 700,
    date: new Date(2021, 11, 1),
  },
  {
    id: 4,
    title: "food2",
    amount: 900,
    date: new Date(2021, 12, 10),
  },
];

function App() {
  const [filteredYear, setFilteredYear] = useState('');
  console.log(filteredYear);

  const [expenseData, setNewExpense] = useState(DummyExpenseData);
  const newExpenseHandler = (expense) => {
    console.log(expense);
    setNewExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const changeYearFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseData.filter((expense) => {
    if(filteredYear===""){
      return expenseData
    }else{
    return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
      <ExpenseFilter
        selected={filteredYear}
        onchangeFilter={changeYearFilter}
      ></ExpenseFilter>
      <ExpenseItem title="Title" amount="Amount" date="Date"></ExpenseItem>
      <hr></hr>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
