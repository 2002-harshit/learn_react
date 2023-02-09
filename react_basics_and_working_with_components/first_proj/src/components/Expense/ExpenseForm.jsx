import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [enetredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [eneteredDate, setEneteredDate] = useState("");
  //! the above three different states can be combined into one state.

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    eneteredDate: "",
  });
  const titleChangeHandler = event => {
    //* we get this event obejct automatically.
    // console.log(event);
    //* this event object has target object that points to the input html element.
    // console.log(event.target.value);

    // setEnteredTitle(event.target.value);
    //! when the setEnteredTitile fucntion is called, the whole function component is re-evaluated and therefore line 5 is also re-evaluated, and hence enteredTitle is updated with event.target.value.
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    /*
     *Again remember , when this setUserInput is called, the whole fucntion component is called again or re evaluated, hence the userInput object is updated with a new object.
     * It is also necessary to add other keys also, otherwise rest of the keys will be lost.
     */

    //* its as if it stored the state of this compoenent.
  };

  const amountEventHandler = function (event) {
    // setEnteredAmount(event.target.value);
    // console.log(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  function dateEventHandler(event) {
    // console.log(event.target.value);
    // setEneteredDate(event.target.value);
    //! event.target.value that is the date is a string.
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  }
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateEventHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
