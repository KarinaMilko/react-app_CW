import { useState } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

const LOGIN_FORM_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};

// email, password

function LoginForm() {
  //   const [value, setValue] = useState("name");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  //   const handleInputChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // send request
    console.log("send >>", { email, password });
    // clear form
    setEmail("");
    setPassword("");
  };

  // const inputEmailClassName = classNames(styles.formInput, {
  //   [styles.validInput]: LOGIN_FORM_REG_EXP.email.test(email),
  //   [styles.invalidInput]: !LOGIN_FORM_REG_EXP.email.test(email),
  // });

  // const inputPasswordClassName = classNames(styles.formInput, {
  //   [styles.validInput]: LOGIN_FORM_REG_EXP.password.test(password),
  //   [styles.invalidInput]: !LOGIN_FORM_REG_EXP.password.test(password),
  // });

  const calcClassName = (name, value) => {
    const isValueValid = LOGIN_FORM_REG_EXP[name].test(value);

    return classNames(styles.formInput, {
      [styles.validInput]: isValueValid,
      [styles.invalidInput]: !isValueValid,
    });
  };

  const isSubmitBtnDisabled = () => {
    console.log(LOGIN_FORM_REG_EXP.password.test(password));
    return !(
      LOGIN_FORM_REG_EXP.email.test(email) &&
      LOGIN_FORM_REG_EXP.password.test(password)
    );
  };

  return (
    // <div>
    //   <input type="text" value={value} onChange={handleInputChange} />
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Email: </span>
          <input
            // className={inputEmailClassName}
            className={calcClassName("email", email)}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourmail@mail"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Password: </span>
          <input
            // className={inputPasswordClassName}
            className={calcClassName("password", password)}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {/* <button className={styles.submitBtn} type="submit"> */}
        <button
          className={styles.submitBtn}
          disabled={isSubmitBtnDisabled()}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
