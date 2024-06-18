import React, { useState } from 'react'
import styles from './add_board.module.css'
import {useGetByOrgIdQuery} from '../../rtk/workspaceSlice';
import { useAddBoardMutation } from '../../rtk/boardSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBoard() {

    const [board,setBoard] = useState('');
    const navigate = useNavigate();
    const [workspaceId,setWorkspaceId] = useState('');
    const [addBoard,{error}] = useAddBoardMutation();

    const {data} = useGetByOrgIdQuery()
    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            boardName : board,
            workspaceId,
            boardMember : [{b_memberid : localStorage.getItem('userId')}],
            createdBy : localStorage.getItem('userId')
        }
        
        let response = await addBoard(payload);
        if(response.error){
            alert("An error occurred: " + response.error.data?.message)
            navigate('/')
        } else if(response.data.success){
            alert(response.data.message)
        } else {
            alert(error.data.message)
        }

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
                <select onChange={(e)=>setWorkspaceId(e.target.value)}>
                    <option>Select Workspace</option>
                   {data?.allWorkspaces?.map((workspace,index) => (
                          <option key={index} value={workspace._id}>{workspace.workspaceName}</option>
                   ))}
                </select>
                <button >Add board</button>
        </form>
    </div>
  )
}
