import './ExpenseCard.css'

function ExpenseCard(props) {
  const classes = props.className;
  return <div className={classes}>{props.children}</div>;
}


export default ExpenseCard;