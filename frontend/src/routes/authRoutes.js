import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../component/navbar/navbar";
import Sidebar from "../component/sidebar/sidebar";
import styles from "./authRoutes.module.css";
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
        <div className={styles.main_screen}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
