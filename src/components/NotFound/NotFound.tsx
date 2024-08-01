import React from "react";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles["not-found-container"]}>
      <h2 className={styles["not-found-text"]}>Page not found</h2>
    </div>
  );
};

export default NotFound;
