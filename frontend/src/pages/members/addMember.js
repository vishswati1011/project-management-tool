import React, { useState } from "react";
import styles from "./add_member.module.css";
import { useCreateUserMutation } from "../../rtk/userSlice";
import { useNavigate } from "react-router-dom";

export default function AddMember() {
  const [createUser, { error }] = useCreateUserMutation();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    phone: "",
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
    const response = await createUser(inputValue);

    if (response.error) {
      alert("An error occurred: " + response.error.data?.message);
    } else if (response.data.success) {
      alert(response.data.message);
      navigate("/members");
    } else {
      alert(error.data.message);
    }
  };
  return (
    <div className={styles.add_member}>
      <form
        className={styles.add_member_form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>Add new member</h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputValue.username}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputValue.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone number"
          value={inputValue.phone}
          onChange={(e) => handleChange(e)}
        />
        <button>Add Member</button>
      </form>
    </div>
  );
}
