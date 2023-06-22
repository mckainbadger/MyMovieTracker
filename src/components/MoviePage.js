//** Import Statements
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { Paper } from "@mui/material";
//** Setup (define helper functions and variables here)

function MoviePage(props) {
  //** Destructure Props
  const {} = props;
  const { id } = useParams();

  console.log("id", id);

  //** State Variables
  const [currentMovie, setCurrentMovie] = useState();
  const [posterImg, setPosterImg] = useState();
  console.log("currentMovie", currentMovie);

  const APIKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDM0MDY0NDI5NjBmZDhmMzgyZTJmNTRhNjliMjQ1YSIsInN1YiI6IjY0OGJhNGY3NDJiZjAxMDBlNDlkMTVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIxYrKyS8HrVHljsFbY_F1ZQ3sUEa3uPKrbcQvSF2oo";

  //** Component Logic
  useEffect(() => {
    const getCurrentMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${APIKey}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        console.log("result", result);
        setCurrentMovie(result);
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentMovie();
  }, []);

  useEffect(() => {
    const getPosterImg = async () => {
      try {
        const response = await fetch(
          `https://image.tmdb.org/t/p/original${currentMovie.poster_path}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${APIKey}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setPosterImg(result.results);
      } catch (err) {
        console.log(err);
      }
    };
    getPosterImg();
  }, []);

  const convertMoney = (int) => {
    return int.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  if (!currentMovie) {
    return <div>Loading...</div>;
  }
  //** Return JSX
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={5} sx={{ width: 400, margin: "30px", padding: "20px" }}>
        <Paper elevation={0} sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia sx={{ border: 2, height: 240, width: 180 }}>
            {posterImg}
          </CardMedia>
        </Paper>
        <h2>{currentMovie.title}</h2>
        <div>
          <i>{currentMovie.tagline}</i>
        </div>
        <div style={{ marginTop: "10px" }}>
          <b>Budget:</b> {convertMoney(currentMovie.budget)}
        </div>
        <div style={{ marginTop: "10px" }}>{currentMovie.overview}</div>
      </Paper>
    </div>
  );
}
export default MoviePage;
