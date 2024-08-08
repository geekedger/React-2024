"use client";

import React from "react";
import styles from "./FallbackComponent.module.css";

const FallbackComponent: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className={styles.fallback}>
      <p>
        🚀 Ta-da! This error was deliberately crafted just for you! Thanks for
        testing!🎭
      </p>
      <button onClick={handleRetry} className={styles.retryButton}>
        Retry
      </button>
    </div>
  );
};

export default FallbackComponent;
