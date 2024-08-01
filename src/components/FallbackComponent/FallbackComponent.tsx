import React from "react";
import styles from "./FallbackComponent.module.css";

interface FallbackComponentProps {}
const FallbackComponent: React.FC<FallbackComponentProps> = () => (
  <div className={styles.fallback}>
    <p>
      🚀 Ta-da! This error was deliberately crafted just for you! Thanks for
      testing!🎭
    </p>
  </div>
);

export default FallbackComponent;
