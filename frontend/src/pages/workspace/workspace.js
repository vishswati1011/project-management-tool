import React, { useState, useEffect, useRef } from "react";
import styles from "./workspace.module.css";
import { useGetWorkspaceQuery, workspaceApi } from "../../rtk/workspaceSlice";
import Loading from "../../component/loader/loader";
import { useNavigate } from "react-router-dom";
import DeleteWorkspace from "./deleteWorkspace";
import EditWorkspace from "./editWorkspace";

export default function Workspace() {
  const { data, isLoading } = useGetWorkspaceQuery("");
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const [isWorkspaceId, setIsWorkspaceId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenId, setIsOpenId] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [forEditWorkspace, setForEditWorkspace] = useState({});
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleLeaveDeletePopup = () => {
    setDeleteOpen(!deleteOpen);
  };

  const handleWorkspace = (id) => {
    localStorage.setItem('workspaceId',id)
    navigate("/boards");
  };

  const handleOpen = (workspace) => {
    setIsWorkspaceId(workspace._id);

    if (workspace._id === isOpenId) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setIsOpenId(workspace._id);
    }
  };

  const toggleEditModal = (workspace) => {
    setEditOpen((prevEditModal) => !prevEditModal);
    setForEditWorkspace(workspace);
  };
  const closeEditModal = () => {
    setEditOpen(false);
  };

  const user_id = localStorage.getItem("userId");


  if (isLoading) {
    return <Loading />;
  }


  return (
    <div className={styles.workspace_container}>
      <table className={styles.workspace_table}>
        <thead className={styles.table_head}>
          <tr>
            <th> Workspace</th>
            <th> Created By</th>
            <th> Created At</th>
            <th> Status</th>
            <th>Action</th>
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
                <td> {workspace?.createdBy?.username}</td>
                <td> {workspace?.createdAt}</td>
                <td>
                  {" "}
                  {workspace?.workspaceStatus === true ? "Active" : "unActive"}
                </td>
                <td className="doted_icon">
                  <svg
                    viewBox="0 0 128 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    onClick={() => handleOpen(workspace)}
                    className="ellipsis_td"
                  >
                    <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104c0 30.9-25.1 56-56 56S8 126.9 8 96s25.1-56 56-56 56 25.1 56 56z" />
                  </svg>
                  {isOpen && isOpenId === workspace._id && (
                    <>
                      <ul className={styles.table_popup} ref={dropdownRef}>
                        <li onClick={() => toggleEditModal(workspace)}>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            style={{ marginRight: ".5rem" }}
                          >
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Edit
                        </li>
                        {workspace?.createdBy._id === user_id ? (
                          <li onClick={() => handleLeaveDeletePopup()}>
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              height="1em"
                              width="1em"
                              style={{ marginRight: ".5rem" }}
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
                            </svg>
                            Delete
                          </li>
                        ) : (
                          <li onClick={() => handleLeaveDeletePopup()}>
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              height="1em"
                              width="1em"
                              style={{ marginRight: ".5rem" }}
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
                            </svg>
                            Leave
                          </li>
                        )}
                        {/* <li onClick={handleSharePopup}>
                                  <InviteWorkspace
                                    workspaceId={workspace._id}
                                    workspaceName={workspace?.workspaceName}
                                    setSharePopup={setSharePopup}
                                    setIsOpen={setIsOpen}
                                  />
                                </li> */}
                      </ul>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {deleteOpen && (
        <DeleteWorkspace
          handleLeaveDeletePopup={handleLeaveDeletePopup}
          deleteOpen={deleteOpen}
          isWorkspaceId={isWorkspaceId}
        />
      )}

      {editOpen && (
        <EditWorkspace
          editOpen={editOpen}
          workspace={forEditWorkspace}
          handleEditPopup={closeEditModal}
        />
      )}
    </div>
  );
}
