import ExpenseForm from './NewExpenseForm'

const NewExpense = () => {

    const saveFormDataHandler = (enteredData) =>{
        const formData = {
            ...enteredData,
            id:Math.random()
        }

        console.log(formData)
    }

    return(
        <ExpenseForm onFormSubmit ={saveFormDataHandler}></ExpenseForm>
    )
}

export default NewExpense;