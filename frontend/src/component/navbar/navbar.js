import React from "react";
import styles from "./navbar.module.css";
import { MdOutlineLogout } from "react-icons/md";
import Sidebar from "../sidebar/sidebar";
import { PiListDashesBold } from "react-icons/pi";
export default function Navbar({ open, setOpen }) {
  return (
    <div>
      <nav className={styles.nav}>
        <h3>
          <PiListDashesBold
            className={styles.sidebar_icon}
            onClick={() => setOpen(!open)}
          />{" "}
          Navbar
        </h3>
        <ul>
          <li>Swati Vishwakarma</li>
          <li>
            <MdOutlineLogout className={styles.icon} />
          </li>
        </ul>
      </nav>
      {/* <Sidebar /> */}
    </div>
  );
}
