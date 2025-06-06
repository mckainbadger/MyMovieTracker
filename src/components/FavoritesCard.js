//** Import Statements
import { useEffect } from "react";
import { useState } from "react";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
//** Setup (define helper functions and variables here)

const FavoritesCard = (props) => {
  //** Destructure Props
  const { movieData, removeFromFavorites } = props;

  //** State Variables
  //** Component Logic
  //** Return JSX
  return (
    <div>
      <Card sx={{ maxWidth: 345 , backgroundColor: "#b0bec5" }}>
        <CardMedia
          sx={{ height: 240, border: 1, margin: 2 }}
          title="poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieData.release_date}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              removeFromFavorites(movieData.id);
            }}
            size="small"
          >
            <StarIcon />
          </Button>
          <Link to={`/movie/${movieData.id}`}>
            <Button size="small">
              <InfoIcon />
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default FavoritesCard;
