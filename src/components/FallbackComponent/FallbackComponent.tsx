import React from 'react';
import './FallbackComponent.css';
interface FallbackComponentProps {
  onRetry: () => void;
}
const FallbackComponent: React.FC<FallbackComponentProps> = ({ onRetry }) => (
  <div className="fallback">
    <p>
      🚀 Ta-da! This error was deliberately crafted just for you! Thanks for
      testing!🎭
    </p>
    <button onClick={onRetry} className="retry-button">
      Retry
    </button>
  </div>
);

export default FallbackComponent;
