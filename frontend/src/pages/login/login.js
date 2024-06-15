import React from "react";
import styles from "./login.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.right_side}>
        <img src="./assets/login.svg" alt="login" className={styles.image} />
      </div>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Login</h2>
          <form className={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <button className={styles.button}>Submit</button>
            <div className={styles.linkContainer}>
              <a href="/signup" className={styles.link}>
                Sign Up?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
