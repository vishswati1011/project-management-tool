import React from "react";
import styles from "./workspace.module.css";
import { useGetWorkspaceQuery } from "../../rtk/workspaceSlice";
import Loading from "../../component/loader/loader";
import { useNavigate } from "react-router-dom";

export default function Workspace() {
  const { data, error, isLoading } = useGetWorkspaceQuery("");
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  const handleWorkspace = (id) => {
    localStorage.setItem("workspaceId", id);
    navigate("/boards");
  };

  return (
    <div className={styles.workspace_container}>
      <table className={styles.workspace_table}>
        <thead className={styles.table_head}>
          <tr>
            <th> Workspace</th>
            <th> Created By</th>
            <th> Created At</th>
            <th> Status</th>
          </tr>
        </thead>
        <tbody className={styles?.workspace_tbody}>
          {data?.allWorkspaces?.map((workspace, index) => {
            return (
              <tr key={index}>
                <td onClick={() => handleWorkspace(workspace?._id)}>
                  {" "}
                  {workspace?.workspaceName}
                </td>
                <td> {workspace?.createdBy?.createdByName}</td>
                <td> {workspace?.createdAt}</td>
                <td>
                  {" "}
                  {workspace?.workspaceStatus === true ? "Active" : "unActive"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
