import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { fetchPokemons, Pokemon } from "./api/api";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import FallbackComponent from "./components/FallbackComponent/FallbackComponent";
import Loader from "./components/Loader/Loader";
import Pagination from "./components/Pagination/Pagination";
import ResultsComponent from "./components/ResultsComponent/ResultsComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import useSearchQuery from "./hooks/useSearchQuery";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "./store/store";
import FlyoutComponent from "./components/FlyoutComponent/FlyoutComponent";
import { setCurrentPage, setPageItems } from "./store/currentPageSlice";

const AppContent: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useSearchQuery("searchTerm", "");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Получаем текущую страницу из Redux store
  const currentPage = useSelector((state: RootState) => state.currentPage.page);
  const pokemons = useSelector((state: RootState) => state.currentPage.items);

  // Используем параметр page из searchParams или значение из Redux store
  const page = isNaN(parseInt(params.get("page") ?? "")) ? currentPage : parseInt(params.get("page") ?? "1");

  useEffect(() => {
    const fetchData = async (searchTerm: string = "", page: number = 1) => {
      setLoading(true);
      setError(null);
      try {
        console.log(`Fetching data with searchTerm: ${searchTerm}, page: ${page}`);
        const response = await fetchPokemons(searchTerm, page);
        console.log('Fetched data:', response);
        dispatch(setPageItems(response.results)); // Обновляем покемонов в Redux store
        dispatch(setCurrentPage(page)); // Обновляем текущую страницу в Redux store
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData(searchTerm, page);
  }, [searchTerm, page, dispatch]);

  const handleSearch = (newSearchTerm: string) => {
    console.log("Handling search with term:", newSearchTerm);
    setSearchTerm(newSearchTerm);
    navigate(`/?search=${newSearchTerm}&page=1`);
  };

  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="app-left">
        <div className="app-top">
          <ThemeToggleButton />
          <SearchComponent searchTerm={searchTerm} onSearch={handleSearch} />
          {loading && <Loader />}
          {error && !loading && <p className="error-message">{error}</p>}
        </div>
        <div className="app-bottom">
          {!loading && !error && (
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
};

const App: React.FC = () => (
  <ErrorBoundary fallback={<FallbackComponent />}>
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);

export default App;
