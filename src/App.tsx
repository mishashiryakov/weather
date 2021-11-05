import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ExtendedWeather } from "./components/ExtendedWeather";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/in/:city" element={<ExtendedWeather />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
