import React from 'react';
import { Link } from './my-react-router';

export function Home(props) {
  return (
    <div style={{ background: 'antiquewhite', padding: 10 }}>
      <div> Yay! This is Home Page</div>
      <br />
      <div>
        <button onClick={() => props.history.push('/login')}>
          Login Page via click
        </button>
      </div>
      <br />
      <div>
        <Link to={'/login'}>Login page</Link>
      </div>
      <div>
        <Link to={'/contact'}>Contact page</Link>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div style={{ background: 'whitesmoke', padding: 10 }}>
      Yay! This is contact page
      <div>
        <Link to={'/login'}>Login page</Link>
      </div>
      <div>
        <Link to={'/home'}>Home page</Link>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <div style={{ background: 'cornsilk', padding: 10 }}>
      Yay! This is login page
      <div>
        <Link to={'/contact'}>Contact page</Link>
      </div>
      <div>
        <Link to={'/home'}>Home page</Link>
      </div>
    </div>
  );
}
