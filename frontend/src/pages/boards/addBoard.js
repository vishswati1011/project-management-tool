import React, { useState } from 'react'
import styles from './add_board.module.css'

export default function AddBoard() {

    const [board,setBoard] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(board)

    }
  return (
    <div className={styles.add_board}>
        <form className={styles.add_board_form} onSubmit={(e)=>handleSubmit(e)}>
            <h3>Create new board</h3>
                <input 
                    type="text"
                    placeholder="board Name" 
                    value={board} 
                    onChange={(e)=>setBoard(e.target.value)}
                />
                <select>
                    <option value="0">Select Workspace</option>
                    <option value="1">Workspace 1</option>
                    <option value="2">Workspace 2</option>
                    <option value="3">Workspace 3</option>
                </select>
                <button >Add board</button>
        </form>
    </div>
  )
}
