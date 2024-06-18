import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <BiLoaderCircle className={styles.loader_icon} />
    </div>
  );
};

export default Loader;
