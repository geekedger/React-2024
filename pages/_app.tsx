import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../src/store/store";
import ErrorBoundary from "../src/components/ErrorBoundary/ErrorBoundary";
import FallbackComponent from "../src/components/FallbackComponent/FallbackComponent";
import "../src/styles/globals.css";
import { ThemeProvider } from "../src/contexts/ThemeProvider";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ErrorBoundary fallback={<FallbackComponent onRetry={() => {}} />}>
        <ThemeProvider>
          <Component {...props.pageProps} />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default MyApp;
