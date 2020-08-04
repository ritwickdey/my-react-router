This is not `react-router-dom` (aka `react-router`) Tutorial. It's a minimal version of `react-router-dom`. If you're interested to know how `react-router-dom` is implemented, this repo will help you to understand how it actually works.

> Note: This sample project does not handle all edge cases and of course it's not as comprehensive as `react-router-dom`. I always wonder how react-router actually works, that is why I was trying out how I can implement it. That's all about the repo.

#### Sample Syntax:

```jsx
import { BrowserRouter, Route, Redirect } from './my-react-router';

<BrowserRouter>
  <Redirect path="/" to="/login" />
  <Route path="/login" component={Login} />
  <Route path="/home" component={App} />
  <Route path="/contact" component={Contact} />
</BrowserRouter>;
```

#### Code: 
[src/my-react-route.js](src/my-react-router.js) _(less than 100 lines)_

<br>
<br>

`:wq!`
