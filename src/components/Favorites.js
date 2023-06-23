//** Import Statements
import { Paper, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import FavoritesCard from "./FavoritesCard";
//** Setup (define helper functions and variables here)

function Favorites(props) {
  //** Destructure Props
  const {} = props;

  //** State Variables
  const [favorites, setFavorites] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (id) => {
    const newFavorites = favorites.filter((mov) => mov.id != id);
    setFavorites(newFavorites);
  };
  //** Component Logic

  //** Return JSX
  return (
    <div>
      <h2>My Favorites</h2>
      {/* <Paper elevation={4} sx={{ margin: 2, padding: 2 , backgroundColor: "#546e7a" }}>
        <Grid container spacing={2}>
          {favorites.map((movieData) => {
            return (
              <Grid item xs={4}>
                <FavoritesCard movieData={movieData} removeFromFavorites={removeFromFavorites}></FavoritesCard>
              </Grid>
            );
          })}
        </Grid>
      </Paper> */}
    </div>
  );
}
export default Favorites;