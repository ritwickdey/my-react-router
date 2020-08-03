import React from "react";
import { Link } from "./my-react-router";

export function App(props) {
  return (
    <div>
      <div> Yay! This is Home Page</div>
      <br></br>
      <div onClick={() => props.history.push("/login")}>
        Login Page via click
      </div>
      <br></br>
      <div>
        <Link to={"/login"}>Login page</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact page</Link>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      Yay! This is contact page
      <div>
        <Link to={"/login"}>Login page</Link>
      </div>
      <div>
        <Link to={"/home"}>Home page</Link>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <div>
      Yay! This is login page
      <div>
        <Link to={"/contact"}>Contact page</Link>
      </div>
      <div>
        <Link to={"/home"}>Home page</Link>
      </div>
    </div>
  );
}
