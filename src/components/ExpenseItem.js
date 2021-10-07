import "./ExpenseItem.css";
import Card from "./Cards/ExpenseCard"


function ExpenseItem(props) {
  return (
    <div>
      <Card className="expenseItemBody">
      <div className="expenseItem">
        <div className="items">
          <h4>{props.title}</h4>
        </div>
        <div className="items">
          <h4>{props.amount}</h4>
        </div>
        <div className="items">
          <h4>{props.date.toLocaleString("en-US", {
            day: "numeric",
            year: "numeric",
            month: "short"
          })}</h4>
        </div>
      </div>
    </Card>
    </div>
    
  );
}

export default ExpenseItem;
