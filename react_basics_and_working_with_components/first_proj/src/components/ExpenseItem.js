import "./ExpenseItem.css";
//*the above import is used to make our project aware of this css file

function ExpenseItem(props) {
  console.log(props);

  // const expenseDate = new Date(2002, 9, 22);
  // //* months start from 0
  // const expenseTitle = "Car insurance";
  // const expenseAmount = 200.5;

  return (
    <div className="expense-item">
      <div>{props.my_defined_attr1}</div>
      <div className="expense-item__description">
        <h2>{props.my_defined_attr3.toDateString()}</h2>
        <div className="expense-item__price">{props.my_defined_attr2}</div>
      </div>
    </div>
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
