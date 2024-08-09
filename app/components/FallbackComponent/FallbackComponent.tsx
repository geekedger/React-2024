import React from "react";
import "./FallbackComponent.css";
interface FallbackComponentProps {}
const FallbackComponent: React.FC<FallbackComponentProps> = () => (
  <div className="fallback">
    <p>
      🚀 Ta-da! This error was deliberately crafted just for you! Thanks for
      testing!🎭
    </p>
  </div>
);

export default FallbackComponent;
