import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { ThemeProvider } from "../src/contexts/ThemeProvider";
import ErrorBoundary from "../src/components/ErrorBoundary/ErrorBoundary";
import FallbackComponent from "../src/components/FallbackComponent/FallbackComponent";
import "../src/styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={<FallbackComponent />}>
      <Provider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default MyApp;
