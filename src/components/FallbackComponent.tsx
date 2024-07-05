import React from 'react';

interface FallbackComponentProps {
  onRetry: () => void;
}

const FallbackComponent: React.FC<FallbackComponentProps> = ({ onRetry }) => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default FallbackComponent;
