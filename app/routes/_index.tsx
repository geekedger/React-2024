// app/routes/index.tsx
import React from "react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "@remix-run/react";
import { useFetchPokemonsQuery } from "../store/apiSlice";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import ResultsComponent from "../components/ResultsComponent/ResultsComponent";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import FlyoutComponent from "../components/FlyoutComponent/FlyoutComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCurrentPage, setPageItems } from "../store/currentPageSlice";
import { useTheme } from "../hooks/useTheme";
import useSearchQuery from "../hooks/useSearchQuery";

export default function IndexRoute() {
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useSearchQuery("searchTerm", "");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPage = useSelector((state: RootState) => state.currentPage.page);
  const pokemons = useSelector((state: RootState) => state.currentPage.items);

  const page = isNaN(parseInt(params.get("page") ?? ""))
    ? currentPage
    : parseInt(params.get("page") ?? "1");

  const {
    data,
    error: apiError,
    isLoading: apiLoading,
  } = useFetchPokemonsQuery({ searchTerm, page });

  useEffect(() => {
    if (apiError) {
      setError(apiError.toString());
    } else {
      setError(null);
    }
  }, [apiError]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    navigate(`/?search=${newSearchTerm}&page=1`);
  };

  useEffect(() => {
    if (data && data.results) {
      dispatch(setPageItems(data.results));
      dispatch(setCurrentPage(page));
    }
  }, [data, dispatch, page]);

  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="app-left">
        <div className="app-top">
          <SearchComponent searchTerm={searchTerm} onSearch={handleSearch} />
          {apiLoading && <Loader />}
          {error && !apiLoading && <p className="error-message">{error}</p>}
        </div>
        <div className="app-bottom">
          {!apiLoading && !error && (
            <>
              <ResultsComponent pokemons={pokemons} error={null} />
              <Pagination next={pokemons.length === 20} />
              <FlyoutComponent />
            </>
          )}
        </div>
      </div>
      <div className="app-right">
        <Outlet />
      </div>
    </div>
  );
}
