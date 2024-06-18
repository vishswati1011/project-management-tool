import React, { useState } from "react";
import styles from "./login.module.css";
import {
  useAddOrganizationMutation,
  useSignupMutation,
} from "../../rtk/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [addOrganization] = useAddOrganizationMutation();
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const { navigate } = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);

    if (inputValue.password !== inputValue.confirm_password) {
      alert("Password does not match");
      return;
    }

    const result = await addOrganization({
      organization: inputValue.organization,
    });
    if (result?.data?.success) {
      let payload = {
        email: inputValue.email,
        username: inputValue.username,
        password: inputValue.password,
        organizationId: result.data.organizationId,
      };
      const signupResult = await signup(payload);
      if (signupResult.data.success) {
        alert(signupResult.data.message);
        navigate("/login");
      }
    } else {
      alert(result?.data?.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.right_side}>
        <img src="./assets/login.svg" alt="login" className={styles.image} />
      </div>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Create your account</h2>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="confirm_password"
              type="confirm_password"
              placeholder="Confirm Password"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="organization"
              type="organization"
              placeholder="Organization"
              className={styles.input}
              onChange={(e) => handleChange(e)}
            />
            <button className={styles.button}>
              {" "}
              {!isLoading ? "Submit" : "Please wait"}
            </button>
            <div className={styles.linkContainer}>
              <a href="/" className={styles.link}>
                Login?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
