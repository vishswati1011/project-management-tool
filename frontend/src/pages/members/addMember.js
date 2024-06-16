import React, { useState } from 'react'
import styles from './add_member.module.css'

export default function AddMember() {

    const [inputValue,setInputValue] = useState({
        username:'',
        email:'',
        phone:''
    });

    const handleChange = (e) => {
        const {name,value} = e.target
        setInputValue({
            ...inputValue,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }
  return (
    <div className={styles.add_member}>
        <form className={styles.add_member_form} onSubmit={(e)=>handleSubmit(e)}>
            <h3>Add new member</h3>
                <input 
                    type="text"
                    name='username'
                    placeholder="Username" 
                    value={inputValue.username} 
                    onChange={(e)=>handleChange(e.target.value)}
                />
                 <input 
                    type="email"
                    name='email'
                    placeholder="Email" 
                    value={inputValue.email} 
                    onChange={(e)=>handleChange(e.target.value)}
                />
                 <input 
                    type="phone"
                    name='phone'
                    placeholder="Phone number" 
                    value={inputValue.phone} 
                    onChange={(e)=>handleChange(e.target.value)}
                />
                <button >Add Member</button>
        </form>
    </div>
  )
}
