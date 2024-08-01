import React, { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { useFetchPokemonsQuery } from "../src/store/apiSlice";
import Loader from "../src/components/Loader/Loader";
import Pagination from "../src/components/Pagination/Pagination";
import ResultsComponent from "../src/components/ResultsComponent/ResultsComponent";
import SearchComponent from "../src/components/SearchComponent/SearchComponent";
import useSearchQuery from "../src/hooks/useSearchQuery";
import ThemeToggleButton from "../src/components/ThemeToggleButton/ThemeToggleButton";
import FlyoutComponent from "../src/components/FlyoutComponent/FlyoutComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/store/store";
import { setCurrentPage, setPageItems } from "../src/store/currentPageSlice";
import { useTheme } from "../src/hooks/useTheme";
import styles from "../src/styles/Home.module.css";

interface HomeProps {
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useSearchQuery("searchTerm", "");
  const [page, setPage] = useSearchQuery("page", "1");
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
  } = useFetchPokemonsQuery({ searchTerm, page: currentPageNumber });

  useEffect(() => {
    if (router.query.page) {
      setPage(router.query.page as string);
    }

    if (data?.results) {
      dispatch(setPageItems(data.results));
      dispatch(setCurrentPage(currentPageNumber));
    }

    if (apiError) {
      setError(apiError.toString());
    } else {
      setError(null);
    }
  }, [router.query.page, data, apiError, dispatch, currentPageNumber, setPage]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setPage("1");
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
              <ResultsComponent pokemons={pokemons} error={null} />
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

export default Home;
