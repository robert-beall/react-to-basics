# Basics
Because I already have a pretty good foundation for the basics of JSX syntax, this section will not contain extensive notes. Instead, I'll just list the pitfalls outlined in the [React Docs](https://react.dev/learn/your-first-component). These are good to remember for best-practice.

- [Basics](#basics)
  - [Pitfalls](#pitfalls)
    - [Method Naming](#method-naming)
    - [Parentheses for Return Statements](#parentheses-for-return-statements)
    - [No Nested Definitions](#no-nested-definitions)


## Pitfalls
These are common pitfalls encountered with basic React components.

### Method Naming
React components are regular JavaScript function, but the component name must be capitalized for the component to function.

### Parentheses for Return Statements
A component return statement should either fit on a single line or be enclosed in parenthethes. If a return statement spans multiple lines without enclosing parentheses, everything following the first line will be ignored.

### No Nested Definitions
Component definitions should not contain other component definitions. This is slow and prone to bugs. 