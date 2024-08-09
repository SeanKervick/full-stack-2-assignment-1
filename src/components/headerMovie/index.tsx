import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieDetailsProps } from "../../types/interfaces";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import PlaylistIcon from '@mui/icons-material/Favorite'; 



const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {

  // retrieve favorite movies from local storage
  const favouriteMovies = JSON.parse(localStorage.getItem("favourites") || '[]'); // from favouriteMoviesPage
  const isFavouriteMovie = favouriteMovies.find((favouriteMovies: { id: number; }) => favouriteMovies.id === movie.id); // check if the movie's id is in the list of favourite movies
  
  // retrieve playlist movies from local storage
  const playlistMovies = JSON.parse(localStorage.getItem("playlists") || '[]'); // from playlistMoviesPage
  const isPlaylistMovie = playlistMovies.find((playlistMovies: { id: number; }) => playlistMovies.id === movie.id); // check if the movie's id is in the list of favourite movies
 


  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {
        // check if the movie is a favourite, display the icon if true
         isFavouriteMovie ? ( // from index.tsx
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
              {
        // check if the movie is a playlist, display the icon if true
         isPlaylistMovie ? ( // from index.tsx
            <Avatar sx={styles.avatar}>
              <PlaylistIcon />
            </Avatar>
          ) : null
        }

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>

    </Paper>
  );
};

export default MovieHeader;