import React, { useState } from 'react'
import styles from './add_workspace.module.css'
import { useNavigate } from 'react-router-dom';

export default function AddWorkspace() {

    const [workspace,setWorkspace] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(workspace)
        navigate('/add_board')

    }
  return (
    <div className={styles.add_workspace}>
        <form className={styles.add_workspace_form} onSubmit={(e)=>handleSubmit(e)}>
            <h3>Create new workspace</h3>
                <input 
                    type="text"
                    placeholder="Workspace Name" 
                    value={workspace} 
                    onChange={(e)=>setWorkspace(e.target.value)}
                />
                <button >Add Workspace</button>
        </form>
    </div>
  )
}
