// app/layout.tsx
import React from "react";
import ErrorBoundary from "../src/components/ErrorBoundary/ErrorBoundary";
import FallbackComponent from "../src/components/FallbackComponent/FallbackComponent";
import { ThemeProvider } from "../src/contexts/ThemeProvider";
import "../src/styles/globals.css";
import { StoreProvider } from "../src/store/StoreProvider";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ErrorBoundary fallback={<FallbackComponent />}>
            <ThemeProvider>{children}</ThemeProvider>
          </ErrorBoundary>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
