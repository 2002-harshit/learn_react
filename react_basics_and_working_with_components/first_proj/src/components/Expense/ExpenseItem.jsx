import { useState } from "react";
import "./ExpenseItem.css";
//*the above import is used to make our project aware of this css file
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.my_defined_attr1); //*this is a react hook
  //* all the hooks are called directly inside the component fucntions.
  // console.log(props);

  // const expenseDate = new Date(2002, 9, 22);
  // //* months start from 0 in the date constructor
  // const expenseTitle = "Car insurance";
  // const expenseAmount = 200.5;

  // let title = props.my_defined_attr1;

  const clickHandler = function () {
    // title = "harshit";
    setTitle("harshit");
  }; //th

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.my_defined_attr3}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.my_defined_attr2}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
    //* it is worthy noting that className is also passed on as a prop to the Card component.
    //* date attribute of ExpsenseDate us defined by me, it could be any other name.
    //* the {} can have any js expression like a funxtion call,mathematical expression as in the case of string literals
    //*now we have just one root, that is important to maintain
    //! we dont use class here but instead className here, remember on the face of it is html, but it is jsx syntax.
  );
}

/*
!it is important to note that a return statement, or a jsx snippet can have just one root/parent tag, that is
!
!   <div></div>
!   <div> 
!       <h2>hello<h2>
!   </div>
!
!This is worng because it has 2 root ya parent elements. solution is have everything in a div.
*/

//* to use this component we have to export this

export default ExpenseItem;
