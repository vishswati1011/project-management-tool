import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Navbar from "../component/navbar/navbar";
import Sidebar from "../component/sidebar/sidebar";
import styles from "./authRoutes.module.css";
import Subheader from '../pages/subheader/subheader'
import Workspace from '../pages/workspace/workspace'
import AddWorkspace from "../pages/workspace/addWorkspace";
import Boards from "../pages/boards/boards";
import AddBoard from "../pages/boards/addBoard";
import Members from "../pages/members/members";
import AddMember from "../pages/members/addMember";

export default function AuthRoutes() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar setOpen={setOpen} open={open} />

      <div className={styles.container}>
        {open && (
          <Sidebar
          // setOpen={setOpen} open={open}
          />
        )}
        <div className={open? styles.main_screen + " " +styles.open_sidebar: styles.main_screen }>
          <Subheader />
          <div  className={styles.main_screen}  >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workspaces" element={<Workspace />} />
            <Route path="/add_workspace" element={<AddWorkspace />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/add_board" element={<AddBoard />} />
            <Route path="/members" element={<Members/>}/>
            <Route path="/add_member" element={<AddMember/>}/>

          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
