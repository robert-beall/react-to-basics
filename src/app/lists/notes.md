# Rendering Lists
Dynamic lists of content can be rendered using the `.map()` and `.filter()` methods native to JavaScript.

**NOTE:** I understand already how to use these functions to display dynamic lists of content in React, but I will list key bits of information to keep on hand.
- [Rendering Lists](#rendering-lists)
  - [Assigning Unique Keys to List Items](#assigning-unique-keys-to-list-items)
  - [Displaying several DOM nodes for each list item](#displaying-several-dom-nodes-for-each-list-item)
  - [Keys](#keys)
    - [How to Derive Keys](#how-to-derive-keys)
    - [Rules for Keys](#rules-for-keys)
    - [Purpose of Keys](#purpose-of-keys)
      - [Pitfall: Using Array Index as Key](#pitfall-using-array-index-as-key)
## Assigning Unique Keys to List Items
A unique `key` is required for every component returned by a `.map()` function call. This key allows React to map the component to its associate data list item and to maintain component order. This is especially important if the components can change order (sorting, filtering, etc.).

**JSX elements directly inside a map() call always need keys.**

Keys should be included in the underlying data rather than generated on the fly. This keeps the key meaningfully associated with the data represented in the component.

## Displaying several DOM nodes for each list item 
If multiple DOM nodes need to be displayed per list item, all nodes must be housed under a parent node. The key will be passed to this node. 

The shorthand fragment component (`<>...</>`) cannot be used as you cannot pass a key to it. Instead, you must use the longform version:

```
<Fragment>...</Fragment>
```

or an appropriate intrinsic element such as a `div`.

Remember that `Fragments` disappears from the DOM, leaving only the underlying child elements to render.

## Keys

### How to Derive Keys
* Data from a database: Primary keys and other unique data.
* Locally generated data: For locally generated and persisted data, you can use an incrementing counter or UUID.

### Rules for Keys
1. Keys **must** be unique among siblings, but can be repeated across separate arrays.
2. Keys cannot change. Do not generate keys while rendering!

### Purpose of Keys
Keys provide a clear, unique identifier for each element in an array. This identifier supersedes the order of the elements and persists even after the order changes. 

#### Pitfall: Using Array Index as Key
By default, React will use the array index as a key if no key is provided. This can lead to bugs and confusion when items are deleted/added/reordered.

Similarly, you should not generate keys on the fly (e.g. `key={Math.random()}`). Keys will never match up between renders, leading all components and DOM to be recreated each time. This is slow and will clear out user input.

**Note:** Keys are not passed to a child as a prop. Instead, they serve as a hint for React. If a component requires a unique identifier, it must be established as a separate prop.