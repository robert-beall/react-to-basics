# Keeping Components Pure
[Pure functions](https://en.wikipedia.org/wiki/Pure_function) only perform a calculation and do nothing else. By using pure functions for React Components, many troublesome errors can be avoided. 

## What are Pure Functions?
Pure functions follow the following two rules:

1. For the **same inputs**, it returns the **same outputs**.
2. It has no side-effects on data or objects outside of it.

Think of pure functions like *mathematical formulas*. You have an input and an output and a calculation performed in between them. 

React components are intended to be pure functions. This means that for a given set of inputs (props), the same JSX should always be returned.

## Side Effects
If a react component were to edit variables/objects/etc. outside of it, its rendering could become unpredictable, making application functionality and testing difficult to manage. 

## Strict Mode
React offers a *strict mode* that runs component functions twice to root out impure components.

Strict mode has no effect in production, so it will not cause performance degredations. To opt into strict mode, wrap your root component in the following tag:

```
<React.StrictMode>
...
</React.StrictMode>
```

Some frameworks do this automatically.

## Local Mutation
It is acceptable to change variables created in the same render. For example, if you define an array inside a React component, that component can update the array.

## Acceptable Side Effects
At some point, something *somewhere* has to change. These changes are called side-effects and they cannot always be avoided. Side-effects should be handled in react using event-handler functions. These event handlers make changes outside of rendering.

## Advantages of Keeping Components Pure
- Components can run in different environments
- Improved performance: skip unneccesary re-renderings.