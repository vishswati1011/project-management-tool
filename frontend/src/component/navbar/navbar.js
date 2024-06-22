import React from "react";
import styles from "./navbar.module.css";
import { MdOutlineLogout } from "react-icons/md";
import { PiListDashesBold } from "react-icons/pi";
import logo from "../../assets/logo5.jpeg";
export default function Navbar({ open, setOpen }) {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo_div}>
          <div>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.logoTitle}>PROJECT MANAGEMENT TOOLS</div>
        </div>
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
