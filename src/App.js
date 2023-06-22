import logo from "./logo.svg";
import "./App.css";
import Watchlist from "./components/Watchlist.js";
import MovieCard from "./components/MovieCard.js";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import MoviePage from "./components/MoviePage";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
