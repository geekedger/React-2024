import React, { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { useFetchPokemonsQuery } from "../../store/apiSlice";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import ResultsComponent from "../ResultsComponent/ResultsComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import useSearchQuery from "../../hooks/useSearchQuery";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import FlyoutComponent from "../FlyoutComponent/FlyoutComponent";
import { RootState } from "../../store/store";
import { setCurrentPage, setPageItems } from "../../store/currentPageSlice";
import { useTheme } from "../../hooks/useTheme";
import styles from "../../styles/Home.module.css";
import { Pokemon } from "../../Interfaces/IPokemon";
import { useDispatch, useSelector } from "react-redux";

// Определите тип пропсов
export interface MainPageProps {
  initialPokemons: Pokemon[];
  initialSearchTerm: string;
  initialPage: number;
  children?: ReactNode;
}

const MainPage: React.FC<MainPageProps> = ({
  initialPokemons,
  initialSearchTerm,
  initialPage,
  children,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useSearchQuery(
    "searchTerm",
    initialSearchTerm,
  );
  const [page, setPage] = useSearchQuery("page", (initialPage || 1).toString());
  const router = useRouter();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.currentPage.page);
  const pokemons = useSelector((state: RootState) => state.currentPage.items);
  const currentPageNumber = isNaN(parseInt(page))
    ? currentPage
    : parseInt(page);

  const {
    data,
    error: apiError,
    isLoading: apiLoading,
  } = useFetchPokemonsQuery(
    { searchTerm, page: currentPageNumber },
    {
      // skip: currentPageNumber === initialPage
    },
  );

  useEffect(() => {
    if (router.query.page) {
      setPage(router.query.page as string);
    }
    if (router.query.search) {
      setSearchTerm(router.query.search as string);
    }
  }, [router.query.page, router.query.search, setPage, setSearchTerm]);

  useEffect(() => {
    if (data?.results) {
      dispatch(setPageItems(data.results));
      dispatch(setCurrentPage(currentPageNumber));
    } else if (initialPokemons.length > 0) {
      // setPokemons(initialPokemons);
      dispatch(setPageItems(initialPokemons));
      dispatch(setCurrentPage(currentPageNumber));
    }
  }, [data, initialPokemons, dispatch, currentPageNumber]);

  useEffect(() => {
    if (apiError) {
      setError(apiError.toString());
    } else {
      setError(null);
    }
  }, [apiError]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    router.push({ pathname: "/", query: { search: newSearchTerm, page: "1" } });
  };

  const { theme } = useTheme();

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <div className={styles["app-left"]}>
        <div className={styles["app-top"]}>
          <ThemeToggleButton />
          <SearchComponent searchTerm={searchTerm} onSearch={handleSearch} />
          {apiLoading && <Loader />}
          {error && !apiLoading && (
            <p className={styles["error-message"]}>{error}</p>
          )}
        </div>
        <div className={styles["app-bottom"]}>
          {!apiLoading && !error && (
            <>
              <ResultsComponent
                pokemons={pokemons.length ? pokemons : initialPokemons}
                error={null}
              />
              <Pagination next={pokemons.length === 20} />
              <FlyoutComponent />
            </>
          )}
        </div>
      </div>
      <div className={styles["app-right"]}>{children}</div>
    </div>
  );
};

export default MainPage;
