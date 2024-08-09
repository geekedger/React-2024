// app/root.tsx
import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import FallbackComponent from "./components/FallbackComponent/FallbackComponent";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Provider } from "react-redux";
import store from "../src/store/store";
import appStyles from "~/styles/App.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: appStyles }];
};

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <ErrorBoundary fallback={<FallbackComponent />}>
              <Outlet />
            </ErrorBoundary>
          </ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
