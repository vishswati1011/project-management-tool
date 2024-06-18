import React from "react";
import styles from "./members.module.css";
import { useFetchUserQuery } from "../../rtk/userSlice";
import Loading from "../../component/loader/loader";

export default function Members() {
  const { data, isLoading } = useFetchUserQuery();

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
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user, index) => (
            <tr>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
