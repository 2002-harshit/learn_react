/*
 !READ THE BELOW SECTION COMMENTS FIRST.
 *Now we made a ExpenseItem component, we wont import it to index.js because that just renders our app, so we import it here to use.
 */

import NewExpense from "./components/Expense/NewExpense";
import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

/*
 * we see somthing strange here this is the html(xml) code in a js file.
 * this is possible due to a transformation that is done under the hood.
 * react absicallyt works on components which are nothing but html code snippets. The whole webiste is built using redundant(or may be not) componenets.
 * In our example App is basically a component that is rendered in index.js file. as <App/>.
 * More precisely its like App component(which is nothing but the above returned html is inserted in index.html's div(with id root) element.)
 * We need atleast a single html file because that serves as the entry point of our app.
 * After that generating views is done by react components(jsx) files.
 * So in essence,a react app is nothing but a culmination of various components.
 * IT IS CONSIDERED A GOOD PRACTICE TO MAINTAINE A FILE FOR EACH COMPONENT.
 *
 *
 *
 * This app component is somewhat special not due to its html but due to its role in the code.
 * It also so happens that components are nested in other components, so u build sort of a COMPONENT TREE with APP as it ROOT.
 *
 * A COMPONENT IS JUST A JS FUNCTION!!!!!!!!!!
 */
