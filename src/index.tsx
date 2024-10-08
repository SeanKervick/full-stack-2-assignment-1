import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import ActorsPage from "./pages/actorsPage"; 
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage"; 
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; 
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage"; 
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
            <ActorsContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/now" element={<NowPlayingMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/movies/top" element={<TopRatedMoviesPage />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/actors/:id" element={<ActorPage />} />
              <Route path="/actors/favourites" element={<FavouriteActorsPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            </ActorsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)