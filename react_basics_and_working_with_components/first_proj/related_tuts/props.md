# Props

## Perops are custom HTML attributes that are supported using JSX.

![props](../related_tuts_resources/props_image.png)

- We know that react components are nothing but basic html and js snippets in the regular js functions which can have normal js code too.

- In the above picture, **< App/>** component has a variable **goalItem** which needs to be passed to a nested component **< CourseGoalItem />**.

- So to pass this information, props are used.

- Like any other html tage/elements ,the react componenets can also have **SELF DEFINED ATTRIBUTES**. Therefore an attribute with the name **text** can be added to **< CourseGoalItem>** which will store the **goslItem** variable to be passed to the the nested component.

- {} are used to pass on the values.

- If you are passing a lot of values to a component, they are sent as an object to the component/function as teh function parameter.

- We explicitly mention this paramater as props(for properties) to justify the concept, **it could be named anything else too**

- In the props(or any name) object, the key are the attribute names( which we deifned earlier), and the values are which you sent.
