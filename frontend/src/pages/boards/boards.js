import React from "react";
import styles from "./boards.module.css";
import { useGetByWorkspaceIdQuery } from "../../rtk/boardSlice";
import Loading from "../../component/loader/loader";

export default function Boards() {
  const { data, isLoading } = useGetByWorkspaceIdQuery(
    localStorage.getItem("workspaceId")
  );

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
          </tr>
        </thead>
        <tbody>
          {data?.allboards?.map((board, index) => (
            <tr key={index}>
              <td> {board.boardName}</td>
              <td> {board.createdBy?.createdByName}</td>
              <td> {board.createdAt}</td>
              <td> {board.boardStatus === true ? "Active" : "unActive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
