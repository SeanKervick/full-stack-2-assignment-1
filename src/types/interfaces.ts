export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
  }

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }

  export interface BaseActorProps {
    id: number;
    name: string;
    biography: string;
    profile_path?: string;
    birthday?: string;
    deathday?: string;
    known_for_department: string;
    popularity: number;
    place_of_birth?: string;
    also_known_as?: string[];
    favourite?: boolean;
  }

  export interface BaseActorListProps {
    actors: BaseActorProps[];
    action: (m: BaseActorProps) => React.ReactNode;
  }


  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
  }

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }

  export interface ActorImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }

  export interface ActorPageProps {
    actor: BaseActorProps;
    images: ActorImage[];
  }

  export type FilterOption = "title" | "genre";

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    selectFavourite: (movieId: number) => void;  //add this
  }

  export interface BaseActorListProps {
    actors: BaseActorProps[];
    selectFavourite: (actorId: number) => void; 
  }

  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }

  export interface ActorListPageTemplateProps extends BaseActorListProps {
    name: string;
  }

  export interface Review{
    id: string;
    content: string
    author: string
  }

  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }

  export interface DiscoverActors {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseActorProps[];
  }