import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "./editWorkspace.module.css";
import { styled } from "@mui/system";
import { useUpdateWorkspaceMutation } from "../../rtk/workspaceSlice";

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent", // Change this to your desired color
  },
}));

export default function EditWorkspace({
  handleEditPopup,
  editOpen,
  workspace,
}) {
    const [isLoading,setIsLoding]= useState(false);  
    const [editWorkspace, { error }] = useUpdateWorkspaceMutation();
    const [workspaceName,setWorkspaceName]= useState("" || workspace?.workspaceName);
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
        const response = await editWorkspace({workspaceName,workspaceId :workspace?._id});
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
          <h2>Edit Workspace</h2>
          <form className={styles.form} onSubmit={(e)=>handleEdit(e)}>
            <input
              type="text"
              name="workspacename"
              placeholder="Enter Workspace"
              className={styles.input}
              value={workspaceName}
              onChange={(e)=>setWorkspaceName(e.target.value)}

            />
            <button className={styles.button}>{isLoading? 'Please wait' : 'Edit'} </button>
          
          </form>
        </div>
        </Box>
      </StyledModal>
    </>
  );
}
