import React, { useEffect } from "react";
import { Outlet, useSearchParams, useNavigate } from "@remix-run/react";
import { Pokemon } from "../../Interfaces/IPokemon";
import { useTheme } from "../../hooks/useTheme";
import SearchComponent from "../SearchComponent/SearchComponent";
import ResultsComponent from "../ResultsComponent/ResultsComponent";
import FlyoutComponent from "../FlyoutComponent/FlyoutComponent";
import Pagination from "../Pagination/Pagination";
import { PokemonDetails } from "../../Interfaces/IPokemondetails";
import "../../styles/App.css";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import useSearchQuery from "../../hooks/useSearchQuery";
import { useDispatch } from "react-redux";
import { setCurrentPage, setPageItems } from "../../store/currentPageSlice";
import Loader from "../Loader/Loader";

// Типы для пропсов MainPage
interface MainPageProps {
  data: {
    initialPokemons: Pokemon[];
    initialSearchTerm: string;
    initialPage: number;
    initialPokemonDetails: PokemonDetails | null; // Updated to match root.tsx
    next: boolean; // Added 'next' to match the root.tsx structure
    error: string | null;
  };
  isLoading: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ data, isLoading }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setSearchTerm] = useSearchQuery(
    "searchTerm",
    data.initialSearchTerm,
  );
  const [page, setPage] = useSearchQuery("page", String(data.initialPage));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    // Инициализируем состояние searchTerm и page при монтировании компонента
    if (searchParams.get("search") !== null) {
      setSearchTerm(searchParams.get("search") || "");
    }
    if (searchParams.get("page") !== null) {
      setPage(searchParams.get("page") || "1");
    }
  }, [searchParams, setSearchTerm, setPage]);

  useEffect(() => {
    if (data && data.initialPokemons) {
      // Используем page для установки текущей страницы
      dispatch(setPageItems(data.initialPokemons));
      dispatch(setCurrentPage(parseInt(page))); // Параметр page будет строкой, поэтому преобразуем в число
    }
  }, [data, dispatch, page]); // Убираем currentPage из зависимостей, заменяя его page

  const handleSearch = (newSearchTerm: string) => {
    searchParams.set("search", newSearchTerm);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    navigate(`/?search=${newSearchTerm}&page=1`);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="app-left">
        <div className="app-top">
          <ThemeToggleButton />
          <SearchComponent
            searchTerm={searchParams.get("search") || ""}
            onSearch={handleSearch}
          />
          {data.error && !data.initialPokemons.length && (
            <p className="error-message">{data.error}</p>
          )}
        </div>
        <div className="app-bottom">
          {isLoading ? (
            <Loader /> // Показать лоадер, если идет загрузка
          ) : (
            !data.error && (
              <>
                <ResultsComponent
                  pokemons={data.initialPokemons}
                  error={null}
                />
                <Pagination
                  next={data.initialPokemons.length === 20 && data.next}
                />
                <FlyoutComponent />
              </>
            )
          )}
        </div>
      </div>
      <div className="app-right">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
