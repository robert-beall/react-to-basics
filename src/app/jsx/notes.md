# JSX Markup
JSX is a syntax extension that allows you to write HTML-like markup in a JavaScript file. 

- [JSX Markup](#jsx-markup)
  - [Purpose](#purpose)
  - [JSX vs. React](#jsx-vs-react)
  - [Rules of JSX](#rules-of-jsx)
    - [Return a single root element](#return-a-single-root-element)
    - [Close all tags](#close-all-tags)
    - [camelCase *most* things](#camelcase-most-things)
      - [Note](#note)


## Purpose
JSX allows for rendering logic and markup to be coupled. For example, a button component will contain both the logic for handling the button alongside the markup for displaying it. Meanwhile, the component system in React allows for unrelated user interface pieces to be isolated from each other.

## JSX vs. React
JSX and React are separate things and can be used independently. JSX is a *syntax extension* whereas React is a *JavaScript Library*.

## Rules of JSX
### Return a single root element
In JSX syntax, only one element can be returned. If multiple top level elements exist, you must wrap them in an empty tag called a fragment: 
```
<> // this is a fragment
    <div>Hello World</div>
    <div>Goodnight Moon</div>
</>
```
Only one element must be returned because JSX is translated to plain Javascript Objects. You cannot return multiple objects from a single JavaScript function.
### Close all tags
All tags must be *explicitly* closed. This includes self-closing tags in HTML. For example, in HTML, this is fine: 
```
<img>
```
In JSX, it must instead be:
```
<img />
```
### camelCase *most* things
Attributes written in JSX are translated into keys in JavaScript objects. Because of the naming restrictions imposed by JavaScript, most attributes cannot contain dashes or the reserved word "class".

As such, many JSX attributes are written in camelCase. The HTML attribute `stroke-width` becomes `strokeWidth`, for example. Likewise, the HTML attribute `class` becomes `className`. 

#### Note
For historical reasons, `aria-*` and `data-*` attributes are kept the same as in HTML.
