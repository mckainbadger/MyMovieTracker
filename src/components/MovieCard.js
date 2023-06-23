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

import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
//** Setup (define helper functions and variables here)

const MovieCard = (props) => {
  //** Destructure Props
  const { movieData, addToWatchlist } = props;

  //** State Variables
  const [posterImg, setPosterImg] = useState();
  const APIKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDM0MDY0NDI5NjBmZDhmMzgyZTJmNTRhNjliMjQ1YSIsInN1YiI6IjY0OGJhNGY3NDJiZjAxMDBlNDlkMTVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIxYrKyS8HrVHljsFbY_F1ZQ3sUEa3uPKrbcQvSF2oo";
  //** Component Logic
  useEffect(() => {
    const getPosterImg = async () => {
      try {
        const response = await fetch(
          `https://corsproxy.io/?https://image.tmdb.org/t/p/original${movieData.poster_path}`,
          {
            headers: {
              authorization: `Bearer ${APIKey}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        // const result = await response.json();
        console.log(response.body)
        // setPosterImg(result.results);
      } catch (err) {
        console.log(err);
      }
    };
    getPosterImg();
  }, [movieData]);
  //** Return JSX
  return (
    <div>
      <Card sx={{ maxWidth: 345, backgroundColor: "#b0bec5" }}>
        <CardMedia
          sx={{ height: 240, border: 1, margin: 2 }}
          image={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
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
              addToWatchlist(movieData);
            }}
            size="small"
          >
            <VisibilityIcon />
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
export default MovieCard;
