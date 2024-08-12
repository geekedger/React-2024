import React from "react";
import "./FallbackComponent.css";

const FallbackComponent: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="fallback">
      <p>
        🚀 Ta-da! This error was deliberately crafted just for you! Thanks for
        testing!🎭
      </p>
      <button onClick={handleRetry} className="retry-button">
        Retry
      </button>
    </div>
  );
};

export default FallbackComponent;
