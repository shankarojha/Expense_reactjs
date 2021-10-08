import ExpenseForm from './NewExpenseForm'

const NewExpense = (props) => {

    const saveFormDataHandler = (enteredData) =>{
        const formData = {
            ...enteredData,
            id:Math.random()
        }

        props.onNewExpense(formData)
    }

    return(
        <ExpenseForm onFormSubmit ={saveFormDataHandler}></ExpenseForm>
    )
}

export default NewExpense;