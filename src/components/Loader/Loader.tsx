import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={styles.loader} role="status">
    <div className="spinner"></div>
  </div>
);

export default Loader;
