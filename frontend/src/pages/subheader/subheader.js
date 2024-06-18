import React from "react";
import styles from "./subheader.module.css";
import { useLocation } from "react-router-dom";
export default function Home() {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x)?.[0];
  console.log(pathname);
  return (
    <div className={styles.sub_header}>
      {pathname === 'members' || pathname === 'add_member' ? 
       <ul>
       <li
         className={
           pathname === "members"
             ? styles.active_link_css
             : styles.inactive_link_css
         }
       >
         {" "}
         <a href="/members" alt="#all_member">
           All Members
         </a>
       </li>

       <li
         className={
           pathname === "add_member"
             ? styles.active_link_css
             : styles.inactive_link_css
         }
       >
         {" "}
         <a href="/add_member" alt="#new_member">
           Invite member{" "}
         </a>
       </li>
    
     </ul>
     :  <ul>
     <li
       className={
         pathname === undefined
           ? styles.active_link_css
           : styles.inactive_link_css
       }
     >
       {" "}
       <a href="/" alt="#all_workspace">
         All Workspaces
       </a>
     </li>

     <li
       className={
         pathname === "add_workspace"
           ? styles.active_link_css
           : styles.inactive_link_css
       }
     >
       {" "}
       <a href="/add_workspace" alt="#new_workspace">
         Add New Workspace{" "}
       </a>
     </li>
     <li
       className={
         pathname === "add_board"
           ? styles.active_link_css
           : styles.inactive_link_css
       }
     >
       {" "}
       <a href="/add_board" alt="#new_board">
         Add New Board{" "}
       </a>
     </li>
   </ul>}
     
    </div>
  );
}
