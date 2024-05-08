import React, { useState, useEffect } from "react";
import "./header.css";
import OffcanvasNav from "./Offcanvas";
import { useNavigate } from "react-router-dom";
import './search.css';

export default function Search({query, setQuery} ) {

 
  
  const [data, setData] = useState();
  const navigateTo = useNavigate();



  const search = () => {

    if ( query ) {
      navigateTo(`/search/${query}`);
    } else {
      alert(`Bitte schreibe den Namen einer Gerichte!`);
    }
  };


  return (
    <div id="container">
      <nav>
        <header>
          <div className="box_1">
            <img
              className="logo"
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/104_Ea_logo_logos-64.png"
              alt="Logo"
            />
          </div>
          <div className="box_2">
            <input
              type="text"
              placeholder="   Find the best recipes from the web..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button onClick={search}>Search</button>
          </div>
          <div>
            <OffcanvasNav name="Adrijana"  />
          </div>
        </header>
      </nav>
    </div>
  );
}
