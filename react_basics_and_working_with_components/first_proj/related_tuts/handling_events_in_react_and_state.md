# Handling events using react

- In the vanilla js, we add events by add event listeners document.get------ , but in react we
  add an even listener by adding a special prop/custom html attribute.

- For every regular js event listener, we have aa corresponding jsx prop which usually starts with **on** like onClick etc.

- Look at the below code:

```javascript
function ExpenseItem(props) {
  let title = props.my_defined_attr1;

  const clickHandler = function () {
    title = "harshit";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.my_defined_attr3}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.my_defined_attr2}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
```

I have added an eventListner(onClick) to the button and a corresponding eventHandler which changes the title when the button is clicked. **BUT THIS SIMPLY DOESNT WORK BUT WHY!!!!!!**

**LETS SEE WHY**

- We have already seen that components are nothing but regualr js funtions which return jsx/html, but we never call these functions, **BUT WE DO CALL THEM**, lets see

```javascript
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
  //* now we will get 3 expense items
);
```

**These are actually the calls to ExpenseItem fucntion/component(or component fucntions)**, which then returns the jsx code of ExpenseItem component, but since it again contains some jsx code like < Card > and < ExpenseDate >, these are **again fucntion calls** and hence are again executed until we finally reach pure html code.

# YOU BASICALLY EXECUTE THESE NESTED FUNCTION COMPONENTS TO GENERATE PURE HTML CODE.(**ANDAR KE ANDAR KE ANDAR KE ANDAR**)

# The first component that gets executed is the < App />.

- Now, lets come back to the problem we had **why did the content didn't update**. since the components are funtions and when we write them as declaration, we call them , so these are called just **once**, **and the job of react is hence over and hence it coneverts whole jsx into pure HTML content**, therefore our title did not update.

# **HERE ENTERS OUR SAVIOUR "STATE" WHICH TELLS REACT TO RE-EVALAUATE CERTIAN COMPONENTS, WHEN SOMETHING CHANGES.**

- Now lets make some ammendment to this code, we will use useState hook ??????????????

```javascript
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.my_attribute_1);
  //1. props.my_attribute_1 is the defualt value of the title variable.
  //2. useState() returns an array which we destructure to obtain that special state variable(title), and the function to handle/update it.
  //3. when setTitle() is callled, it sets the title to new value(notice it is const but it is still updated because it internally managed), it also re-eavualuates that particular COMPONENT INSTANCE in  which the corrsponding useState was used, and the const [title,setTitle]=useState(props.my_attrinnute_1) is therefore executed again, and the new title value is fetched which got updated when setTitle() was called, but it NOT re-initilised with props.my_attribute_1 because react maintains whetehr u r calling useState for the first time or not.

  function clickHandler() {
    setTitle("harshit");
    console.log(title);
  }

  //4. Look closely at the console.log statement after it, when we call setTitle with "harshit", title shoud have been updated to "harshit" ans hould have been logged, but THAT DOESNT HAPPEN THE OLD VALUE IS STILL LOGGED ,THIS IS BECAUSE SETTITLE() FUNCTION IS SCHEDULED AND IS THEREFORE NOT CALLED IMMEDIATELY.

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.my_defined_attr3}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.my_defined_attr2}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
```

- Let us anaylize the above code, we know that earlier this function component was only called once, and hence the value was not updated, but now with the use of useState hook, we sort of defined a new special variable that is **title**, that is used to manage the state(more of a state variable).
