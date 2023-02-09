# Lets discuss something about className

- When the className attribute is added to an HTML element, it is itself understood that a CSS class is added to the html element, so that it could be styled.

- But in the case of a react component,if it is assigned a className, it does not mean that a CSS class is added to it, because at the end of the day, it is just an attribute of thatg react component, so you have to make some changes to your react component, in order to implement the normal html tag class addition behaviour.

```html
<Card className="expense-item">
  <ExpenseDate date="{props.my_defined_attr3}"></ExpenseDate>
  <div className="expense-item__description">
    <h2>{props.my_defined_attr1}</h2>
    <div className="expense-item__price">{props.my_defined_attr2}</div>
  </div>
</Card>
```

```javascript
function Card(props) {
  return <div className="card">{props.children}</div>;
}
```

- In the above example, Card component is bascially a div with a CSS class "card", but our intended effect is sto add "expense-item" also as a CSS class, so now we will modify the js for Card compoenent.

- Since className is an attribute, it will be passed as an object, which we generally call props.

```javascript
function Card(props) {
  const classes = `card {props.className}`;
  return <div className={classes}>{props.children}</div>;
}
```

- Now this card acts as wrapper for various other compoenents, how due to this special props which is called children, whch is automatically set in the props object, it basically holds as the name suggest, the children of that component which in our case is everything under

```html
<Card></Card>
```
