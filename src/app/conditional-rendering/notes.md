# Conditional Rendering
JSX can be conditionally rendered using JavaScript syntax like `if` statements, `&&`, and `? :` operators.
- [Conditional Rendering](#conditional-rendering)
  - [Conditionally Return JSX](#conditionally-return-jsx)
    - [Conditionally returning nothing with null](#conditionally-returning-nothing-with-null)
  - [Conditionally Including JSX](#conditionally-including-jsx)
    - [Conditional (ternary) operator (? :)](#conditional-ternary-operator--)
      - [JSX as a blueprint](#jsx-as-a-blueprint)
    - [Logical AND operator (\&\&)](#logical-and-operator-)
      - [Note on JavaScript \&\& operator](#note-on-javascript--operator)
      - [Pitfall: Don't put numbers on the left-side of \&\&](#pitfall-dont-put-numbers-on-the-left-side-of-)
  - [Conditionally assigning JSX to a variable](#conditionally-assigning-jsx-to-a-variable)

## Conditionally Return JSX
One way to control the output of JSX is to use `if` statements to control what is returned. For example, let's say you want to return text in either a `<h1>` tag or a `<p>` tag depending on a boolean: 

```
if (bool === true) {
    return (<h1>{text}</h1>);
}

return (<p>{text}</p>);
```

Remember, in React, control flow is handled through JavaScript.

### Conditionally returning nothing with null 
In some cases, you may not want to render anything, in which case you can return null instead of JSX. 

For example, you may have a boolean value for excluding the JSX when it is flagged as true:

```
if (bool === true) {
    return null;
}

return (<>{text}</>);
```

**Note:** Returning null from a component is not common and can surprise a developer trying to render it. It is better to conditionally include or exclude a component in the parent component.

## Conditionally Including JSX
The above examples can become cumbersome after a while. Often, you want to change what is displayed within one piece of JSX, rather than what whole chunk of JSX is returned.
### Conditional (ternary) operator (? \:)
Ternary operators used within JSX can replace `if` statements when conditionally including JSX.

For example, we have a component in which we either display the text 'yes' or 'no' based on a boolean value:

```
return (<>
  {bool ? 'yes' : 'no'}
</>);
```

for more complex situations, it is best practice format the ternary on separate lines like so:

```
return (<>
  {bool 
    ? <h1>Header</h1>
    : <p>Paragraph</p>
  }
</>);
```

**NOTE:** Avoid overusing ternary operators (especially nested ones) as this can clutter up code. If you notice ternaries proliferating, it might be worth extracting child components to clean things up.

#### JSX as a blueprint
To some developers, it might seem like using an `if` statement to return different JSX elements based on a conditional differs from using a `? :` operator within a JSX element. However, JSX elements are not real DOM nodes. Instead, JSX is a lightweight blueprint, making both of these approaches equivalent.

### Logical AND operator (&&) 
This operator can be used when you want to render some JSX when a condition is true and otherwise render nothing.

For example: 

```
return (<>
  <h1>Display:</h1>
  {bool && <p>YES</p>}
</>);
```

#### Note on JavaScript && operator
This operator will return the first falsey value, or if no values are false, the last true value. See more about this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND).

React treats a falsey value (along with nulls and undefined) as a hole in the UI tree and will display nothing.

#### Pitfall: Don't put numbers on the left-side of &&
JavaScript evaluates an `&&` condition by automatically converting left-side of the condition into a boolean automatically. However, a number in the left-hand side marked as '0' will evaluate as false return automatically (see notes on `&&` above for more info). As such, the following:

```
retureturn (<>
  {num && <p>YES</p>}
</>);
```

will evaluate as `1` instead of `YES`.

## Conditionally assigning JSX to a variable
An `if` statement and a variable can be the simplest approach in some cases. For example, consider the following example: 

```
let content = lastName;

if (typeof nickname !== 'undefined') {
  content = nickname + " " + content;
}

return (<>
  <h1>Name:</h1>
  <p>{content}</p>
</>);
```
