import React from 'react'
import styles from './sidebar.module.css'
import { MdOutlineDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { LuUserSquare2 } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa6";
import { BsFillClipboard2DataFill } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";

export default function Sidebar({open,setOpen}) {
  return (
    <div className={styles.sidebar_div}>
        {/* <div className={styles.close_icon}>
              <span>Navbar</span>
               <span className={styles.close} onClick={()=>setOpen(!open)}>
                <RxCross2/>
                </span>
            </div> */}
        <ul>
            <li> <MdOutlineDashboard className={styles.icon}/> <a className={styles.link_side} href='/' alt='#dashboard'> Dashboard</a>  
            </li>
            <li> <BsFillClipboard2DataFill className={styles.icon}/> <a className={styles.link_side} href='/' alt='#workspaces'>Workspace</a></li>
            <li> <LuUserSquare2 className={styles.icon}/> <a className={styles.link_side} href='/members' alt='#members'>Member</a></li>
            <li> <BiTask className={styles.icon}/> <a className={styles.link_side} href='/meeting' alt='#task'>Meeting</a></li>
            <li> <FaUserTie className={styles.icon}/> <a className={styles.link_side} href='/profile' alt='#profile'>Profile</a></li>
        </ul>
    </div>
  )
}
