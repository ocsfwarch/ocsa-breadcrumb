# OCSA Breadcrumb

A lightweight and customizable React component for rendering accessible breadcrumb navigation in your web applications.

## Features

- Supports navigation hierarchy with optional links.
- Accessible with proper ARIA attributes.
- Customizable styling using external CSS.

## Installation

Install the package via npm:

```
npm install ocsa-breadcrumb
```

````

Or with Yarn:

yarn add ocsa-breadcrumb

````

## Usage

### 1. Import the Component and Styles


```tsx
import React from "react";
import OcsaBreadcrumb from "ocsa-breadcrumb";
```

### 2. Provide Breadcrumb Items

The `OcsaBreadcrumb` component accepts an array of items representing your navigation hierarchy. Each item can include:

- **label**: The text to display for the breadcrumb item.
- **href** (optional): The URL the item links to. If omitted, the item is treated as plain text.
- **isCurrent** (optional): Set `true` for the current page (last breadcrumb item).

### 3. Example Markup

Here’s how you can use the component in your React project:

```tsx
import React from "react";
import OcsaBreadcrumb from "ocsa-breadcrumb";

const App = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", href: "/data" },
    { label: "Bootstrap", href: "/bootstrap" },
    { label: "Product", isCurrent: true },
  ];

  return (
    <div>
      <OcsaBreadcrumb items={items} />
    </div>
  );
};

export default App;
```

### Output

The component renders a breadcrumb navigation like this:

```html
<nav aria-label="breadcrumb" class="breadcrumb">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/library">Library</a></li>
    <li><a href="/data">Data</a></li>
    <li><a href="/bootstrap">Bootstrap</a></li>
    <li><span aria-current="page">Product</span></li>
  </ul>
</nav>
```

## Customization

### Optional onClick Handler
The component allows for the inclusion of an 'onClick' handler.
The return value is an item in the items array.

Here’s how you can use the component in your React project:

```tsx
import React from "react";
import OcsaBreadcrumb from "ocsa-breadcrumb";

const App = () => {
  const handleOnClick = (item: BreadcrumbItem) => {
    console.log(item.label)
  }

  const items = [
    { label: "Home", href: "/" },
    { label: "Library", href: "/library" },
    { label: "Data", href: "/data" },
    { label: "Bootstrap", href: "/bootstrap" },
    { label: "Product", isCurrent: true },
  ];

  return (
    <div>
      <OcsaBreadcrumb items={items}  onClickHandler={onClickHandler} />
    </div>
  );
};

export default App;
```

### Default Styles

Here’s a summary of the default CSS:

```css
:root {
  --breadcrumb-color: red;
  --breadcrumb-content: "→";
}

.breadcrumb {
  padding: 0 0.5rem;
}

.breadcrumb ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: end;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 0.25rem;
  content: var(--breadcrumb-content);
  color: var(--breadcrumb-color);
}

```

### Overriding Styles

To customize, add your own CSS rules targeting the `breadcrumb` class or its children:

```css
.breadcrumb li:not(:last-child)::after {
  content: ">";
  color: blue;
}
```

## Accessibility

- The `aria-label="breadcrumb"` attribute ensures the navigation is accessible.
- The `aria-current="page"` attribute identifies the current page for screen readers.

## Contributing

Contributions are welcome! If you encounter a bug or have a feature request, please open an issue or submit a pull request.

## License

This package is licensed under the [MIT License](./LICENSE).


