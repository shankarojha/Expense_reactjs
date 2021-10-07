import { useState } from 'react'
import './NewExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(Number)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(parseInt(event.target.value))
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate),
            time:Date.now()
        };

        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')

        props.onFormSubmit(expenseData)
    }

    return (
        <form onSubmit = {formSubmitHandler}>
            <div className="newExpenseControls">
                <div className="newExpenseControl">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
                </div>
                <div className="newExpenseControl">
                    <label>Amount</label>
                    <input type="number" min="0.00" step="0.1" onChange={amountChangeHandler} value={enteredAmount}></input>
                </div>
                <div className="newExpenseControl">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
                </div>
                <div className="newExpenseControl">
                    <label>Submit</label>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;