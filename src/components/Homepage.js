//** Import Statements
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Grid, Paper } from "@mui/material";
//** Setup (define helper functions and variables here)

function Homepage(props) {
  //** Destructure Props
  const {} = props;

  //** State Variables
  const [popularMovies, setPopularMovies] = useState([]);

  const APIKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDM0MDY0NDI5NjBmZDhmMzgyZTJmNTRhNjliMjQ1YSIsInN1YiI6IjY0OGJhNGY3NDJiZjAxMDBlNDlkMTVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIxYrKyS8HrVHljsFbY_F1ZQ3sUEa3uPKrbcQvSF2oo";
  //** Component Logic

  const [watchlist, setWatchlist] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("watchlist");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movieData) => {
    const newWatchlist = [...watchlist];
    if (!newWatchlist.some((movie) => movie.id === movieData.id)) {
      newWatchlist.push({
        title: movieData.title,
        id: movieData.id,
        release_date: movieData.release_date,
      });
      setWatchlist(newWatchlist);
    }
  };

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular`,
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
        setPopularMovies(result.results);
      } catch (err) {
        console.log(err);
      }
    };
    getPopularMovies();
  }, []);

  if (!popularMovies) {
    return <div>Loading...</div>;
  }
  //** Return JSX
  return (
    <>
      <Paper
        elevation={3}
        sx={{ margin: 10, padding: 4, backgroundColor: "gray" }}
      >
        <Grid container spacing={2}>
          {popularMovies.map((movieData) => {
            return (
              <Grid item xs={2}>
                <MovieCard
                  movieData={movieData}
                  addToWatchlist={addToWatchlist}
                />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
}
export default Homepage;
