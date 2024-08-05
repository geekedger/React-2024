import React from "react";
import styles from "./FallbackComponent.module.css";

interface FallbackComponentProps {
  onRetry: () => void;
}

const FallbackComponent: React.FC<FallbackComponentProps> = ({ onRetry }) => (
  <div className={styles.fallback}>
    <p>
      🚀 Ta-da! This error was deliberately crafted just for you! Thanks for
      testing!🎭
    </p>
    <button onClick={onRetry} className={styles.retryButton}>
      Retry
    </button>
  </div>
);

export default FallbackComponent;
