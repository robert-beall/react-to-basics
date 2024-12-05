# JavaScript in JSX with Curly Braces
Curly braces allow you to insert JavaScript into JSX markup.
## Passing Property Values Dynamically
If you want to pass dynamic variables in JSX, pass them via curly braces like so: 

```
const prop = 'My String';

return (<MyComponent aProp={prop} >
    TEXT
</MyComponent>);
```
## Embedding JavaScript in JSX
Using curly braces, you can also embed dynamic variables into JSX markup. For example:
```
const myString = 'A string value';

return (<div>{myString} to be displayed here</div>);
```

Any valid JavaScript expression will work inside JSX curly braces.
## Where to use Curly Braces
Curly braces can be used in two places:

1. As text directly in a JSX element:
```
<div>{...}</div>
```
2. As Attributes:
```
<div data-testid={...}> Text </div>
```
## Passing Objects
JavaScript objects can be passed in JSX by using double curly braces (i.e. just wrapping the normal object in JSX curly braces.)

As an example, JSX style attributes take an object as input: 

```
<div
 style={{color: 'blue'}}>
Text
</div>
```
### Note
Style attributes are camelCase in JSX. For example, 'background-color' becomes 'backgroundColor'.