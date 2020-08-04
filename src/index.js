import React from 'react';
import ReactDOM from 'react-dom';
import { App, Login, Contact } from './App';
import { BrowserRouter, Route, Redirect } from './my-react-router';

const Routes = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Redirect path="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" component={App} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
