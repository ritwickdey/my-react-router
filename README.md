#### About

This is not `react-router-dom` (aka `react-router`) tutorial. It's a minimal version of `react-router-dom`.

If you're interested to know how `react-router-dom` is implemented, this repo will help you to understand how it actually works.

#### Syntax

```jsx
//Define Routes
import { BrowserRouter, Route, Redirect } from './my-react-router';

<BrowserRouter>
  <Redirect path="/" to="/login" />
  <Route path="/login" component={Login} />
  <Route path="/home" component={App} />
  <Route path="/contact" component={Contact} />
</BrowserRouter>;
```

```jsx
//Inside Component. `Link` and `props.history`
import { Link } from './my-react-router';

function Home(props) {
  return (
    <div>
      <button onClick={() => props.history.push('/login')}>
        Login Page via click
      </button>
      <Link to={'/login'}>Login page vai link</Link>
    </div>
  );
}
```

#### Code

[src/my-react-route.js](src/my-react-router.js) _(less than 100 lines)_

<br>

> Note: This sample project does not handle all edge cases and of course it's not as comprehensive as `react-router-dom`. I always wonder how react-router actually works, that is why I was trying out how I can implement it. That's all about the repo.

<br>

`:wq!`
