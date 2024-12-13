# Component Properties
Properties (props) allow React components to communicate with each other. Props move downstream from parent components to their children. While props resemble HTML attributes, they can take any kind of JavaScript data.

- [Component Properties](#component-properties)
  - [Destructuring](#destructuring)
  - [Specifying Default Values](#specifying-default-values)
  - [Forwarding Props](#forwarding-props)
  - [Passing JSX as children](#passing-jsx-as-children)
  - [How Props Change Over Time](#how-props-change-over-time)

**NOTE:**
I have a good handle on props, so I'm going to just write down some of the pitfalls and prootips.

## Destructuring
Props can be passed to a component as a single `props` object or as a destructured set of objects. 

Destructuring props is best practice, as it allows you to select the elements you need and have them available as named elements. It is cleaner and easier to work with.
## Specifying Default Values
You can specify a default value for when a prop is not passed to a component in the JSX. This is done by using an assignment with the `=` operator in the destructured props parameter:
```
function Component({name = 'John Doe'}) {...}
```
The default value will be used if the prop is not passed to the component or if `undefined` is passed as the prop value. However, a `null` value will pass to the component instead of triggering the use of the default. 
## Forwarding Props
Passing props from parent to child components can become repetitive. Some components pass all props to their children without using the values directly. This can be made more concise by using *spread syntax*:

```
function Parent(props) {
    return (
        <div>
            <Child {...props} />
        </div>);
}
```
This passes all Parent props to the Child component.

**NOTE:** Spread syntax should be used with restraint. If you are using this syntax for every component, it usually indicates that components should be split up, with children being passed as JSX. 
## Passing JSX as children
When you place child components within parent components in JSX like so: 
```
<Parent>
    <Child1 />
    <Child2 />
</Parent>
```
Those children become available through a prop named `children`.

The `children` prop can then be displayed from the Parent component like so: 
```
function Parent({children}) {
    return (<>
        <h1>My Children:</h1>
        {children}
    </>);
}
```
The parent component does not need to 'know' what component(s) have been passed in order to access and display those components.

Think of `children` as a slot within each component that can be filled with any particular component or set of components as determined by the developer.

## How Props Change Over Time
Components may receive different prop values over time. For example, you may have a clock component that takes a `time` prop that updates every second. 

Props are not *static*, but they are *immutable*. How is this resolved? Simply, the prop cannot be changed within the component. If a prop value needs to be updated, the component must 'request' different props (a new object) from the parent component.

**Key Point:** Don't try to change props from within a component. To respond to user input, you must set state (which will be addressed later).