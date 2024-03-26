# Solid Routing Template

This template is intended to be used with the tutorial "Solid JS - Basic Routing".
http://carlbecker.dev/...

> This is a template for a tutorial and is customized to that purpose. It is not intended nor appropriate as a starting point live for a real-life production project.

## Usage

dgit
pnpm dev

## To recreate the template from scratch

1. Start with the official Solid JavaScript template

```
npx degit solidjs/templates/js solid-routing-basic
```

2. Delete these files

- src/logo.svg
- src/index.css (Be carefull not to accidently delete`index.jsx`.)
- src/App.module.css

3. Install Bootstrap

```
pnpm i bootstrap
```

4. Replace the code in App.jsx with this:

```jsx
export default function App() {
  return (
    <div class="container" style="padding: 15px">
      <div class="card">
        <h1>App</h1>
      </div>
    </div>
  );
}
```

5. Replace the code in `index.jsx` with this:

```jsx
/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root');

render(() => <App />, root);
```

## Ready to go

That's all you need to do. You are ready to start the [link NOT PUBLISHED YET link] tutorial.