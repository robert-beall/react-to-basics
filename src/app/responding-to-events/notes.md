# Event Handlers
Event handlers are custom functions triggered by events such as clicking, focus, hovering, etc.

## Adding an Event Handler
An event handler is a passed as a prop to a React component/JSX tag.

```
<button onClick={() => console.log('hello world')} />
```

Alternatively, you can define the event handler separately and then pass it into the component:

```
function clickEvent() {
    console.log('hello world');
}
...
<button onClick={clickEvent} />
```

### Event Handler Conventions
Event handlers usually follow these conventions:
- They are defined inside your component
- Have a name that starts with 'handle' followed by the name of the event.

### Pitfall
Event Handlers are not called when passed to the JSX tag. For example, this is incorrect as it fires the handler immediately when the component is rendered.

```
<button onClick={handleClick()} />
```

Think of the event handler function as being stored away for later use when the event is triggered.

## Passing Event Handlers as Props
In order for a parent component to specify a child component's event handler, the handler must be passed as a prop:

```
function MyButton({onClick}) {
    return (<button onClick={onClick} />);
}
```

The naming convention for event handler props is to use "on" followed by the event name.

## Event Propagation
Event handlers will also catch events from all children a component might have. Events are bubbled up the chain from child to parent and beyond in what is known as event propagation.

In the following example, each child button onClick event will occur, followed by the parent div onClick event:

```
<div onClick={() => console.log('hello world')} />
    <button onClick={() => console.log('goodnight moon')} />
</div>
```

On clicking the child button, the following input in the console will be observed:

```
goodnight moon
hello world
```

### onScroll Exception
All events propagate in React except onScroll, which only works on the JSX tag you attach it to.