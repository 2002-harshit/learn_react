import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  let expenses = props.items;

  return (
    <Card className="expenses">
      <ExpenseItem
        my_defined_attr1={expenses[0].title}
        my_defined_attr2={expenses[0].amount}
        my_defined_attr3={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        my_defined_attr1={expenses[1].title}
        my_defined_attr2={expenses[1].amount}
        my_defined_attr3={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        my_defined_attr1={expenses[2].title}
        my_defined_attr2={expenses[2].amount}
        my_defined_attr3={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        my_defined_attr1={expenses[3].title}
        my_defined_attr2={expenses[3].amount}
        my_defined_attr3={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
