import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "../workspace/deleteWorkspace.module.css";
import { styled } from "@mui/system";
import { useDeleteUserMutation } from "../../rtk/userSlice";

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent", // Change this to your desired color
  },
}));

export default function DeleteMember({
  handleDeletePopup,
  deleteOpen,
  userId,
}) {


  const [deleteMember, { error }] = useDeleteUserMutation();
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

  const handleDeletePermanently = async () => {
    const response = await deleteMember(userId);
    if (response.error) {
      alert("An error occurred: " + response.error.data?.message);
    } else if (response.data.success) {
      alert(response.data.message);
      handleDeletePopup();
    } else {
      alert(error.data.message);
    }
  };

  return (
    <>
      <StyledModal
        open={deleteOpen}
        onClose={() => handleDeletePopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <p className={styles.delete_Workspace_modal_text}>
            Are you sure you want to delete?
          </p>
          <div className={styles.delete_Workspace_modal_div}>
            <button
              className={styles.delete_Workspace_modal_button}
              onClick={() => handleDeletePopup()}
            >
              Cancel
            </button>
            <button
              onClick={() => handleDeletePermanently()}
              className={styles.delete_Workspace_modal_button_right}
            >
              Delete
            </button>
          </div>
        </Box>
      </StyledModal>
    </>
  );
}
