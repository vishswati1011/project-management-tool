import React,{useRef,useEffect,useState} from "react";
import styles from "./members.module.css";
import { useFetchUserQuery } from "../../rtk/userSlice";
import Loading from "../../component/loader/loader";
import DeleteMember from "./deleteMember";
import EditMember from "./editMember";
export default function Members() {
  const { data, isLoading } = useFetchUserQuery();
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
  const [userId, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenId, setIsOpenId] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [forEditWorkspace, setForEditWorkspace] = useState({});
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleOpen = (user) => {
    setUserId(user._id);

    if (user._id === isOpenId) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setIsOpenId(user._id);
    }
  };

  const toggleEditModal = (user) => {
    setEditOpen((prevEditModal) => !prevEditModal);
    setForEditWorkspace(user);
  };
  const closeEditModal = () => {
    setEditOpen(false);
  };

  const handleDeletePopup = () => {
    setDeleteOpen(!deleteOpen);
  };


  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.members_container}>
      <table className={styles.members_table}>
        <thead className={styles.table_head}>
          <tr>
            <th> username</th>
            <th> Email</th>
            <th> Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user, index) => (
            <tr>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.createdAt}</td>
              <td>
              <td className="doted_icon">
                  <svg
                    viewBox="0 0 128 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    onClick={() => handleOpen(user)}
                    className="ellipsis_td"
                  >
                    <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104c0 30.9-25.1 56-56 56S8 126.9 8 96s25.1-56 56-56 56 25.1 56 56z" />
                  </svg>
                  {isOpen && isOpenId === user._id && (
                    <>
                      <ul className={styles.table_popup} ref={dropdownRef}>
                        {/* <li onClick={() => toggleEditModal(user)}>
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
                        </li> */}
                          <li onClick={() => handleDeletePopup()}>
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
                       
                      </ul>
                    </>
                  )}
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteOpen && (
        <DeleteMember
          handleDeletePopup={handleDeletePopup}
          deleteOpen={deleteOpen}
          userId={userId}
        />
      )}

      {editOpen && (
        <EditMember
          editOpen={editOpen}
          member={forEditWorkspace}
          handleEditPopup={closeEditModal}
        />
      )}
    </div>
  );
}
