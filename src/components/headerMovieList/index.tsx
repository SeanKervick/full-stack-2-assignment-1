import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (headerProps) => {
  const title = headerProps.title;

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Link to="/movies/favourites">
        <IconButton aria-label="go forward">
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default Header;
