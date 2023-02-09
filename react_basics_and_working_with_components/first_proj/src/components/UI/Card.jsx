import "./Card.css";

function Card(props) {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

//! evry compoent gets children prop whether you set it or not

//! IT CONTAINS THE CHILDREN ELEMENTS OF THAT COMPONENT, FOR EXMAPLE IN THE ExpenseItem.js what ever <Card></Card> encloses is the children of card
