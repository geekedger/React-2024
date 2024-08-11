import React from "react";
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import FallbackComponent from "./components/FallbackComponent/FallbackComponent";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import MainPage from "./components/MainPage/MainPage";
import { fetchData } from "./components/server/fetchData";
import { Pokemon } from "./Interfaces/IPokemon";
import { PokemonDetails } from "./Interfaces/IPokemondetails";
import "./styles/global.css";

type LoaderData = {
  initialPokemons: Pokemon[];
  initialSearchTerm: string;
  initialPage: number;
  initialPokemonDetails: PokemonDetails | null;
  success: boolean;
  error: string | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams: Record<string, string | string[] | undefined> = {
    search: url.searchParams.get("search") || undefined,
    page: url.searchParams.get("page") || undefined,
    id: url.searchParams.get("id") || undefined,
  };

  try {
    const data = await fetchData({ searchParams });

    return {
      initialPokemons: data.dataFromServer.initialPokemons,
      initialSearchTerm: data.dataFromServer.initialSearchTerm,
      initialPage: data.dataFromServer.initialPage,
      initialPokemonDetails: data.dataFromServer.initialPokemonDetails,
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    console.error("Error in Loader:", error);
    return {
      initialPokemons: [],
      initialSearchTerm: "",
      initialPage: 1,
      initialPokemonDetails: null,
      success: false,
      error: "Failed to fetch data",
    };
  }
};

export default function App() {
  const loaderData = useLoaderData<LoaderData>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading" ? true : false;

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
              <MainPage
                data={{
                  initialPokemons: loaderData.initialPokemons,
                  initialSearchTerm: loaderData.initialSearchTerm,
                  initialPage: loaderData.initialPage,
                  initialPokemonDetails: loaderData.initialPokemonDetails,
                  next: loaderData.success,
                  error: loaderData.error,
                }}
                isLoading={isLoading}
              />
            </ErrorBoundary>
          </ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
