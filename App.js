import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./componente/Main";
import Navbar from "./componente/Navbar";
import Search from "./componente/Search";
import Foodliste from "./componente/Foodliste";
import Gerichte from "./componente/Gerichte";

function App() {
  const APP_ID = "a99bd604";
  const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";

  const MY_ID = "90ee5af4";
  const MY_APP_KEY = "6a216c2acee48b0cb69646622bc54eb4 ";

  const [recepte, setRecepte] = useState();
  const [query, setQuery] = useState();
  const [meals, setMeals] = useState([]);
  const [daten, setDaten] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setMeals(data.hits);
        setRecepte(data.hits);
        setDaten(data.hits);
      });
  }, [query]);
  //console.log(recepte);
  //console.log(meals);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Main daten={daten} />} />
          <Route path="/search/:foodliste" element={<Foodliste query={query} setQuery={setQuery} recepte={recepte} setRecepte={setRecepte} />} />
          <Route path="/search/:foodliste/:gerichte" element={<Gerichte meals={meals} setMeals={setMeals} />} />
        </Route>
        <Route path="/search" element={<Search query={query} setQuery={setQuery} />} /> 
      </Routes>
    </div>
  );
}

export default App;
