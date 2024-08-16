import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { BaseActorProps } from "../../types/interfaces";
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

const ActorHeader: React.FC<BaseActorProps> = (actor) => {

  // retrieve favorite actors from local storage
  const favouriteActors = JSON.parse(localStorage.getItem("favourites") || '[]'); // from favouriteActorsPage
  const isFavouriteActor = favouriteActors.find((favouriteActors: { id: number; }) => favouriteActors.id === actor.id); // check if the actor's id is in the list of favourite actors
  
  // retrieve playlist actors from local storage
  const playlistActors = JSON.parse(localStorage.getItem("playlists") || '[]'); // from playlistActorsPage
  const isPlaylistActor = playlistActors.find((playlistActors: { id: number; }) => playlistActors.id === actor.id); // check if the actor's id is in the list of favourite actors
 


  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {
        // check if the actor is a favourite, display the icon if true
         isFavouriteActor ? ( // from index.tsx
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
              {
        // check if the actor is a playlist, display the icon if true
         isPlaylistActor ? ( // from index.tsx
            <Avatar sx={styles.avatar}>
              <PlaylistIcon />
            </Avatar>
          ) : null
        }

      <Typography variant="h4" component="h3">
        {actor.name}{"   "}
        <a href={actor.name}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${actor.biography}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>

    </Paper>
  );
};

export default ActorHeader;