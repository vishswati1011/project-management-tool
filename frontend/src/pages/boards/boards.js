import React,{useRef,useState,useCallback,useEffect} from "react";
import styles from "./boards.module.css";
import { useGetByWorkspaceIdQuery } from "../../rtk/boardSlice";
import Loading from "../../component/loader/loader";
import DeleteBoard from './deleteBoard';
import EditBoard from './editBoard';
import { useNavigate } from "react-router-dom";

export default function Boards() {
  const { data, isLoading } = useGetByWorkspaceIdQuery(
    localStorage.getItem("workspaceId")
  );

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
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
  const [boardId, setBoardId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenId, setIsOpenId] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [editboard, setForEditboard] = useState({});
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleLeaveDeletePopup = () => {
    setDeleteOpen(!deleteOpen);
  };

  const handleBoard = (id) => {
    localStorage.setItem('workspaceId',id)
    navigate("/task");
  };

  const handleOpen = (board) => {
    setBoardId(board._id);

    if (board._id === isOpenId) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setIsOpenId(board._id);
    }
  };

  const toggleEditModal = (board) => {
    setEditOpen((prevEditModal) => !prevEditModal);
    setForEditboard(board);
  };
  const closeEditModal = () => {
    setEditOpen(false);
  };

  const user_id = localStorage.getItem("userId");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.board_container}>
      <table className={styles.board_table}>
        <thead className={styles.table_head}>
          <tr>
            <th> Board</th>
            <th> Created By</th>
            <th> Created At</th>
            <th> Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.allboards?.map((board, index) => (
            <tr key={index}>
              <td onClick={()=>handleBoard(board?._id)}> {board.boardName}</td>
              <td onClick={()=>handleBoard(board?._id)}> {board.createdByName}</td>
              <td onClick={()=>handleBoard(board?._id)}> {board.createdAt}</td>
              <td onClick={()=>handleBoard(board?._id)}> {board.boardStatus === true ? "Active" : "unActive"}</td>
              <td className="doted_icon">
                  <svg
                    viewBox="0 0 128 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    onClick={() => handleOpen(board)}
                    className="ellipsis_td"
                  >
                    <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104c0 30.9-25.1 56-56 56S8 126.9 8 96s25.1-56 56-56 56 25.1 56 56z" />
                  </svg>
                  {isOpen && isOpenId === board._id && (
                    <>
                      <ul className={styles.table_popup} ref={dropdownRef}>
                        <li onClick={() => toggleEditModal(board)}>
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
                        {board?.createdBy === user_id ? (
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
                                  <Inviteboard
                                    boardId={board._id}
                                    boardName={board?.boardName}
                                    setSharePopup={setSharePopup}
                                    setIsOpen={setIsOpen}
                                  />
                                </li> */}
                      </ul>
                    </>
                  )}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteOpen && (
        <DeleteBoard
          handleLeaveDeletePopup={handleLeaveDeletePopup}
          deleteOpen={deleteOpen}
          boardId={boardId}
        />
      )}

      {editOpen && (
        <EditBoard
          editOpen={editOpen}
          board={editboard}
          handleEditPopup={closeEditModal}
        />
      )}
    </div>
  );
}
