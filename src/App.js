import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import {Favorites} from "./components/Favorites";
import {Watchlist} from "./components/Watchlist";
import {Add} from "./components/Add";
function App() {
  return (
    <div className="App">
      <Routes>
        <Header/>
      </Routes>
    </div>
  );
}

export default App;
