import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const filterChangeHandler=(event)=>{
        props.onchangeFilter(event.target.value)
    }

    return(
        <div className="expense_filter">
            <div className='expense_filter_control'>
                <label>Filter by year</label>
                <select onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;