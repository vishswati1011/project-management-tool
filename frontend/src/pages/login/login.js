import React,{useState} from "react";
import styles from "./login.module.css";
import { useLoginMutation } from "../../rtk/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [login, { isLoading, isError, error }] = useLoginMutation()
  
  const  navigate  = useNavigate();

  const [inputValue,setInputValue] = useState({
    email : '',
    username : ''
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
 
    setInputValue({
      ...inputValue,
      [name] : value
    })
  }
 
  const handleSubmit =async(e) =>{
    e.preventDefault();
    console.log(inputValue);
      let payload = {
        email : inputValue.email,
        password : inputValue.password,
      }
      const loginResult = await login(payload)
      if(loginResult.data.success){
        alert(loginResult.data.message)
        localStorage.setItem('token',loginResult.data.token)
        localStorage.setItem('userId',loginResult.data.userId)
        navigate('/')

      }

  }

  return (
    <div className={styles.container}>
      <div className={styles.right_side}>
        <img src="./assets/login.svg" alt="login" className={styles.image} />
      </div>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Login</h2>
          <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={inputValue.email}
              onChange={(e)=>handleChange(e)}

            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
              value={inputValue.password}
              onChange={(e)=>handleChange(e)}

            />
            <button className={styles.button}>{isLoading? 'please wait' : 'Submit'} </button>
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
