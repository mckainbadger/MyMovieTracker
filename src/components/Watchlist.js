//** Import Statements
import { Paper, Grid } from "@mui/material";
import WatchlistCard from "./WatchlistCard";
import { useState, useEffect } from "react";
//** Setup (define helper functions and variables here)

function Watchlist(props) {
  //** Destructure Props
  const {} = props;

  //** State Variables
  const [watchlist, setWatchlist] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("watchlist");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const removeFromWatchlist = (id) => {
    const newWatchlist = watchlist.filter((mov) => mov.id != id);
    setWatchlist(newWatchlist);
  };
  //** Component Logic

  //** Return JSX
  return (
    <div>
      <h2>My Watchlist</h2>
      <Paper elevation={4} sx={{ margin: 2, padding: 2 , backgroundColor: "#546e7a" }}>
        <Grid container spacing={2}>
          {watchlist.map((movieData) => {
            return (
              <Grid item xs={4}>
                <WatchlistCard movieData={movieData} removeFromWatchlist={removeFromWatchlist}></WatchlistCard>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}
export default Watchlist;
