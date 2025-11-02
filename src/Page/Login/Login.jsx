//import componpents
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { verifyUser } from "../../data/users";

//import styles
import "./Login.css";
function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <div className="login-header-container">
        <h1>Login</h1>
      </div>
      <div className="login-form-container">
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          value={"user"}
          placeholder="user" // admin guest
          ref={userRef}
        />
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          value={"pass"}
          placeholder="pass"
          ref={passRef}
        />
        <button
          className="btn btn-primary mt-3"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            const userInfo = verifyUser(user, pass);
            userRef.current.value = "";
            passRef.current.value = "";

            if (userInfo === null) {
              // not authorized
              alert("Username or Password is incorrect");
              userRef.current.focus();
            } else {
              // authorized
              setRole(userInfo.role);
              setToken(userInfo.token);
            }
          }}
        >
          Sign&nbsp;In
        </button>
      </div>
    </div>
  );
}

export default Login;
