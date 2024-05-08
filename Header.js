import React, { useState, useEffect } from "react";
import "./header.css";
import OffcanvasNav from "./Offcanvas";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ModalF from "./Modal";

export default function Header() {
  const MY_ID = "90ee5af4";
  const MY_APP_KEY = "6a216c2acee48b0cb69646622bc54eb4 ";

  const APP_ID = "a99bd604";
  const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";

  const [value, setValue] = useState("");
  const [recepte, setRecepte] = useState([]);
  const [search, setSearch] = useState([]);
  const [show, setShow] = useState("");

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        //das zu checken habe ich in state_query "all" eingetragen und bekomme Infos
        setSearch(data.hits);
        console.log(recepte);
      });
  }, [value]);

  function MapCard() {
    if (value !== "") {
      setShow(
        search.map((items, index) => (
          <Card key={index} style={{ width: "16rem", margin: "7px" }}>
            <Card.Img variant="top" src={items.recipe.image} />
            <Card.Body>
              <ModalF
                name={items.recipe.label}
                bild={items.recipe.image}
                zutaten={items.recipe.ingredients}
                health={items.recipe.healthLabels}
                digest={items.recipe.digest}
              />
              <Card.Text>
                <i>
                  Receptquelle ist "<b>{items.recipe.source}</b>" und hier
                  können Sie <br />
                  <Card.Link href={items.recipe.url} target="_blank">
                    <i> Anleitung zur Zubereitung</i>
                  </Card.Link>{" "}
                  sehen!
                </i>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <label>
                  <span
                    style={{ color: "rgb(108, 196, 251)", marginRight: "5px" }}
                  >
                    {Math.floor(items.recipe.calories)}
                  </span>
                  CALORIES
                </label>
              </ListGroup.Item>
              <ListGroup.Item>
                <label>
                  <span
                    style={{ color: "rgb(108, 196, 251)", marginRight: "5px" }}
                  >
                    {items.recipe.ingredients.length}
                  </span>
                  INGREDIENTS
                </label>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {/* <Card.Link href="#">{items.recipe.dishType}</Card.Link> */}
              <p>
                Typ: <span className="upp">{items.recipe.dishType}</span>
              </p>
            </Card.Body>
          </Card>
        ))
      );
    } else {
      setShow(
        <p style={{ color: "red" }}>
          Der Eintrag ist ungültig, bitte versuchen Sie es erneut!
        </p>
      );
    }
  }

  return (
    <div id="container">
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
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={MapCard}>
            <img src="https://cdn2.iconfinder.com/data/icons/25-free-ui-icons/40/magnifier-64.png" />
          </button>
        </div>
        <div>
          <OffcanvasNav name="Adrijana" id={MY_ID} appKey={MY_APP_KEY} />
        </div>
      </header>
      <div id="leer_nichtLeer" className="article_container">
        {show}
        <hr style={{ width: "100%" }} />
      </div>
    </div>
  );
}
