import React, { useState } from "react";
import styles from "./add_workspace.module.css";
import { useNavigate } from "react-router-dom";
import { useAddWorkspaceMutation } from "../../rtk/workspaceSlice";

export default function AddWorkspace() {
  const [workspace, setWorkspace] = useState("");
  const [AddWorkspace, { error }] = useAddWorkspaceMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(workspace);
    let payload = {
      workspaceName: workspace,
      createdBy: localStorage.getItem("userId"),
      workspaceMember: [{ w_memberid: localStorage.getItem("userId") }],
    };
    const response = await AddWorkspace(payload);
    if (response.error) {
      alert("An error occurred: " + response.error.data?.message);
    } else if (response.data.success) {
      alert(response.data.message);
      navigate("/add_board");
    } else {
      alert(error.data.message);
    }
  };
  return (
    <div className={styles.add_workspace}>
      <form
        className={styles.add_workspace_form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>Create new workspace</h3>
        <input
          type="text"
          placeholder="Workspace Name"
          value={workspace}
          onChange={(e) => setWorkspace(e.target.value)}
        />
        <button>Add Workspace</button>
      </form>
    </div>
  );
}
