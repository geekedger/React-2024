// app/routes/_index.tsx
import React, { useEffect } from "react";
import type { LinksFunction } from "@remix-run/node";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
  const [searchTerm, setSearchTerm] = useSearchQuery("searchTerm", data.initialSearchTerm);
  const [page, setPage] = useSearchQuery("page", String(data.initialPage));
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const currentPage = useSelector((state: RootState) => state.currentPage.page);
  const pokemons = useSelector((state: RootState) => state.currentPage.items);
  console.log(data);

  useEffect(() => {
    // Инициализируем состояние searchTerm и page при монтировании компонента
    if (searchParams.get("search") !== null) {
      setSearchTerm(searchParams.get("search") || "");
    }
    if (searchParams.get("page") !== null) {
      setPage(searchParams.get("page") || "1");
    }
  }, [searchParams, setSearchTerm, setPage]);
  
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
          <SearchComponent searchTerm={searchParams.get("search") || ""} onSearch={handleSearch} />
          {data.error && !data.initialPokemons.length && (
            <p className="error-message">{data.error}</p>
          )}
        </div>
        <div className="app-bottom">
          {!data.error && (
            <>
              <ResultsComponent pokemons={data.initialPokemons} error={null} />
              <Pagination next={data.next} />
              <FlyoutComponent /> {/* Pass details */}
            </>
          )}
        </div>
      </div>
      <div className="app-right">
        <Outlet />
      </div>
      {isLoading && <p>Loading...</p>} {/* Loading state display */}
    </div>
  );
};

export default MainPage;
