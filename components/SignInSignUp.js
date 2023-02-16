import Button from "./Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser} from '../reducers/user';
import styles from "../styles/SignInSignUp.module.css";


const min_password_length = 6;

export default function SignInSignUp() {
  const [create, setCreate] = useState(true);
  const [logIn, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isEnabled, setEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const dispatch = useDispatch()

  const handleCreate = () => {
    setUsername("");
    setPassword1("");
    setPassword2("");
    setErrorMessage("");
    setCreate(true);
    setLogin(false);
  };

  const handleLogIn = () => {
    setUsername("");
    setPassword1("");
    setPassword2("");
    setErrorMessage("");
    setCreate(false);
    setLogin(true);
  };

  const checkIfSame = () => {
    if (create) {
      if (
        password1 === password2 &&
        username &&
        password1.length >= min_password_length
      ) {
        setEnabled(true);
      }
      if (
        password1 !== password2 ||
        !username ||
        password1.length < min_password_length
      ) {
        setEnabled(false);
      }
    }
    if (logIn) {
      if (password1 && username) {
        setEnabled(true);
      } else {
        setEnabled(false);
      }
    }
  };

  useEffect(() => {
    checkIfSame();
  }, [password1]);

  useEffect(() => {
    checkIfSame();
  }, [password2]);

  useEffect(() => {
    checkIfSame();
  }, [password1]);

  useEffect(() => {
    checkIfSame();
  }, [username]);

  const handleSubmit = () => {
    if (create) {
      fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password1,
        }),
      })
        .then((res) => res.json())
        .then((data) => {

        if(!data.result){
            setErrorMessage(data.error)
            return 
        } 
        dispatch(addUser(data.user))
        });
    }
    if (logIn) {
      fetch("http://localhost:3000/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password1,
        })
      })
        .then((res) => res.json())
        .then((data) => {
            if(!data.result){
                setErrorMessage(data.error)
                return
            } 
            dispatch(addUser(data.user))
        });
    }
  };

  return (
    <div className={styles.signInSignUpContent}>
      <div className={styles.create_signIn}>
        <h2
          onClick={() => handleCreate()}
          style={{ color: create ? "#2f356d" : "rgb(123,150,212, 0.5)" , cursor : "pointer"}}
        >
          Create an account
        </h2>
        <h2
          onClick={() => handleLogIn()}
          style={{ color: logIn ? "#2f356d" : "rgb(123,150,212, 0.5)" , cursor : "pointer"}}
        >
          Sign In
        </h2>
      </div>
      <div>
        {create && (
          <div className={styles.inputContainer}>
            <label className={styles.labels}>Username</label>
            <input
              className={styles.inputs}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label className={styles.labels}>
              Pasword{" "}
              <span style={{ fontSize: "14px" }}>
                (minimum {min_password_length} characters)
              </span>
            </label>
            <input
              type="password"
              onChange={(e) => setPassword1(e.target.value)}
              minlength={`${min_password_length}`}
              className={styles.inputs}
            ></input>
            <label className={styles.labels}>Confirm your password</label>
            <input
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              minlength={`${min_password_length}`}
              className={styles.inputs}
            ></input>
            <p style={{textAlign : "center", color : "red"}}>{errorMessage}</p>
            <Button
              name="Sign Up"
              padding={"10px 20px"}
              disabled={!isEnabled}
              handleClick={handleSubmit}
            />
          </div>
        )}
        {logIn && (
          <div className={styles.inputContainer}>
            <label className={styles.labels}>Username</label>
            <input
              type="text"
              className={styles.inputs}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label className={styles.labels}>Pasword</label>
            <input
              type="password"
              onChange={(e) => setPassword1(e.target.value)}
              minlength={`${min_password_length}`}
              className={styles.inputs}
            ></input>
            <p style={{textAlign : "center", color : "red"}}>{errorMessage}</p>
            <Button
              name="Sign In"
              padding={"10px 20px"}
              disabled={!isEnabled}
              handleClick={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
