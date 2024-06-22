import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "../workspace/editWorkspace.module.css";
import { styled } from "@mui/system";
import { useUpdateBoardMutation } from "../../rtk/boardSlice";

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent", // Change this to your desired color
  },
}));

export default function EditBoard({
  handleEditPopup,
  editOpen,
  board,
}) {
    
    const [isLoading,setIsLoding]= useState(false);  
    const [editBoard, { error }] = useUpdateBoardMutation();

    const [boardName,setBoardName]= useState("" || board?.boardName);

    const ModalStyle = {
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        borderRadius: "5px",
        boxShadow: 24,
        p: 2,
    };

    const handleEdit = async () => {
        setIsLoding(true);
        const response = await editBoard({boardName:boardName,boardId :board?._id});
        if (response.error) {
        alert("An error occurred: " + response.error.data?.message);
        } else if (response.data.success) {
        alert(response.data.message);
        setIsLoding(false);
        handleEditPopup();
        } else {
        alert(error.data.message);
        }
    };

    

  return (
    <>
      <StyledModal
        open={editOpen}
        onClose={() => handleEditPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
        <div className={styles.login_div}>
          <h2>Edit Board</h2>
          <form className={styles.form} onSubmit={(e)=>handleEdit(e)}>
            <input
              type="text"
              name="boardname"
              placeholder="Enter board name"
              className={styles.input}
              value={boardName}
              onChange={(e)=>setBoardName(e.target.value)}

            />
            <button className={styles.button}>{isLoading? 'Please wait' : 'Edit'} </button>
          
          </form>
        </div>
        </Box>
      </StyledModal>
    </>
  );
}
