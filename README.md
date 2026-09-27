# react-playground

Hands-on POCs of React and its ecosystem. Every project lives under [pocs/](pocs/) and runs locally with npm.

## 🧱 React Fundamentals

The core building blocks: components, props, state, events and rendering.
Everything else in React is built on top of these.

* [props-fun](pocs/props-fun/) - Passing data down to components with props
* [simple-component-state](pocs/simple-component-state/) - Component state with useState
* [handle-simple-events](pocs/handle-simple-events/) - Handling click and input events
* [render-elements-fun](pocs/render-elements-fun/) - How React renders and updates elements
* [basic-list-and-keys-fun](pocs/basic-list-and-keys-fun/) - Rendering lists with keys
* [basic-forms-fun](pocs/basic-forms-fun/) - Controlled form inputs
* [simple-form-fun](pocs/simple-form-fun/) - A simple form with state and submit
* [simple-table-fun](pocs/simple-table-fun/) - A table rendered from data
* [react-errorboundary-fun](pocs/react-errorboundary-fun/) - Error boundaries catching render errors
* [suspense-popcorn-react](pocs/suspense-popcorn-react/) - Suspense and React.lazy with a slow component and a fallback
* [react-false](pocs/react-false/) - Components returning false, measured with the Profiler
* [react-null](pocs/react-null/) - Components returning null, measured with the Profiler

## 🪝 Hooks

Hooks let function components keep state, run side effects and share logic.
Custom hooks package that logic so many components can reuse it.

* [hooks-use-effect-fun](pocs/hooks-use-effect-fun/) - Side effects with useEffect
* [hooks-my-custom-fun](pocs/hooks-my-custom-fun/) - Writing a custom hook
* [react-accessible-dropdown-menu-hook-fun](pocs/react-accessible-dropdown-menu-hook-fun/) - Accessible dropdown menu from a hook library

## 🗃️ State Management

State libraries keep shared data outside the component tree.
They range from the built-in Context API to atoms, stores and state machines.

* [context-api-fun](pocs/context-api-fun/) - Sharing state with the Context API
* [react-context-api-simple](pocs/react-context-api-simple/) - Context API in TypeScript
* [react-redux-nofun](pocs/react-redux-nofun/) - Redux store with react-redux
* [react-mobx-fun](pocs/react-mobx-fun/) - Observable state with MobX
* [recoil-fun](pocs/recoil-fun/) - Atoms and selectors with Recoil
* [react-recoil](pocs/react-recoil/) - Another take on Recoil atoms
* [jotai-fun](pocs/jotai-fun/) - Primitive atoms with Jotai
* [react-easy-state-ts-fun](pocs/react-easy-state-ts-fun/) - Proxy-based stores with React Easy State
* [react-simpler-state-fun](pocs/react-simpler-state-fun/) - Global state with simpler-state
* [xstate-fun](pocs/xstate-fun/) - State machines with XState
* [xstate-store-fun](pocs/xstate-store-fun/) - Lightweight stores with @xstate/store

## 🎨 UI Component Libraries

Component libraries ship ready-made buttons, forms, tables and widgets.
They give a consistent look without building every piece by hand.

* [antd-design-fun](pocs/antd-design-fun/) - Ant Design components
* [antd-react-simple](pocs/antd-react-simple/) - Ant Design with TypeScript
* [material-ui-fun](pocs/material-ui-fun/) - Material UI components
* [react-primereact-simple](pocs/react-primereact-simple/) - PrimeReact components
* [react-reactive-button-fun](pocs/react-reactive-button-fun/) - Animated buttons with reactive-button
* [react-simply-carousel-fun](pocs/react-simply-carousel-fun/) - Carousel with react-simply-carousel
* [pretty-rating-react-fun](pocs/pretty-rating-react-fun/) - Star ratings with pretty-rating-react

## 💅 Styling

Styling tools keep CSS next to the component that uses it.
Some run at runtime, others compile the styles away at build time.

* [styled-components-fun](pocs/styled-components-fun/) - CSS-in-JS with styled-components
* [react-jss-fun](pocs/react-jss-fun/) - CSS-in-JS with JSS
* [stylex-fun](pocs/stylex-fun/) - Compile-time atomic CSS with StyleX

## 📊 Charts, Graphics & Canvas

Charts turn data into pictures, and canvas apps let users draw on the screen.
Here: 2D charts, a 3D scene and whiteboard-style editors.

* [donut-chart-fun](pocs/donut-chart-fun/) - Donut chart with react-donut-chart
* [nivo-fun](pocs/nivo-fun/) - Bar and funnel charts with Nivo
* [three-react-ts](pocs/three-react-ts/) - 3D scene with Three.js and React Three Fiber
* [react-drawing-canvas](pocs/react-drawing-canvas/) - Free drawing on an HTML canvas
* [tldraw-fun](pocs/tldraw-fun/) - Infinite whiteboard with tldraw
* [figma-like](pocs/figma-like/) - Figma-like editor to draw and move rectangles and circles, built with Vite

## 🧭 Routing, Data & Frameworks

Routers map URLs to screens, and data clients talk to APIs.
Full-stack frameworks bring both together with the server.

* [react-router-fun](pocs/react-router-fun/) - Client-side routing with React Router
* [axios-fun](pocs/axios-fun/) - Calling REST APIs with Axios
* [remix-react-form-simple](pocs/remix-react-form-simple/) - Remix pizza order form with server actions

## 🧪 Testing

Tests check that components render and behave the way users expect.
They go from unit tests and snapshots to full browser runs.

* [basic-testing-react](pocs/basic-testing-react/) - Unit tests with React Testing Library
* [basic-testing-snapshot-fun](pocs/basic-testing-snapshot-fun/) - Snapshot tests with Jest
* [testing-dom-elements-fun](pocs/testing-dom-elements-fun/) - Testing DOM elements, mocks, Axios, Redux and routes
* [react-css-testing](pocs/react-css-testing/) - CSS tests on Tailwind with Cypress and Playwright

## ⏱️ Performance

Performance tools measure how long components take to render.
They catch slow renders and regressions before users feel them.

* [react-benchmark-fun](pocs/react-benchmark-fun/) - Benchmarking a component render
* [reassure-simple-fun](pocs/reassure-simple-fun/) - Render performance regression tests with Reassure

## 🧩 Micro Frontends

Module Federation lets separate apps share components at runtime.
Each team can build and deploy its own part of the UI.

* [module-federation-simple-react](pocs/module-federation-simple-react/) - Two hosts exposing and consuming each other's Button with Webpack Module Federation
* [module-federation-simple-react-2](pocs/module-federation-simple-react-2/) - A host app loading a remote component

## 🛠️ Build & Tooling

Build tools compile, bundle and serve the app during development.
Here: Create React App, Vite and TypeScript setups.

* [react-vite-fun](pocs/react-vite-fun/) - React app on Vite
* [react-template-app-ts](pocs/react-template-app-ts/) - Create React App template with TypeScript
* [js-ts-app-fun](pocs/js-ts-app-fun/) - Mixing JavaScript and TypeScript in one app

## 🎮 Apps

Small complete apps that put many of the pieces above together.

* [react-tutorial-fun](pocs/react-tutorial-fun/) - Tic-tac-toe from the official React tutorial
* [react-calculator-fun](pocs/react-calculator-fun/) - Calculator with keyboard shortcuts via react-hotkeys
* [react-shopping-crud](pocs/react-shopping-crud/) - Shopping list CRUD in TypeScript backed by a REST API
* [react-steps-wizard-ui](pocs/react-steps-wizard-ui/) - Multi-step food order wizard
* [dificult-snake-react](pocs/dificult-snake-react/) - Snake game on Vite, generated by a code agent
