# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Packages**

`npm i react-tsparticles`
This package provides a React component for creating animated particle backgrounds. It is a React wrapper around the popular particles.js library. With this package, you can easily add particle effects to your React application.


`npm install react-intersection-observer`
In React, you can use the react-intersection-observer package to work with the Intersection Observer API in a more React-friendly manner. This package provides a higher-order component and a hook to easily observe when an element enters or exits the viewport.

Intersection Observer is a web API that provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. It's commonly used for lazy loading images, infinite scrolling, and triggering animations when elements come into view.



`npm install @mui/material @emotion/react @emotion/styled`
These packages are part of the Material-UI library, which is a popular React UI framework. @mui/material provides the core Material-UI components, and @emotion/react and @emotion/styled are used for styling. Emotion is a CSS-in-JS library that helps with styling React components.

`npm install @mui/icons-material`
This package provides a set of Material Design icons that can be easily integrated into your Material-UI application. Each icon is a React component, making it straightforward to include icons in your UI.

`npm i react-router-dom`

` npm i @emailjs/browser`
`npm i framer-motion`


`dangerouslySetInnerHTML` is a React attribute that allows you to insert raw HTML directly into your React components. The term "dangerous" is used because it exposes your application to the risk of cross-site scripting (XSS) attacks if used improperly.

Here's an example of how you might use `dangerouslySetInnerHTML`:

```html
  <div>
    <h1>{portfolio.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: portfolio.description }}></div>
  </div>
	```

In this example, portfolio.description is assumed to contain HTML content. The `dangerouslySetInnerHTML` attribute is then used to render this HTML content inside a <div>.

============

