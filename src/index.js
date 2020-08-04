import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Login, Contact } from './component';
import { BrowserRouter, Route, Redirect } from './my-react-router';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Redirect path="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
