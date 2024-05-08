import React, { useState, useEffect } from "react";
import "./main.css";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

export default function Main({daten}) {

  const APP_ID = "a99bd604";
  const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";

  const navigateTo = useNavigate();


  return (
    <div className="article_container">
      <h1>Unsere Vorschläge für Sie!</h1>
      <div className="card_div">
        {daten && daten.map((items, index) => (
          <Card className="cards" key={index}>
            <Card.Img variant="top" src={items.recipe.image} />
            <Card.Body>
              <button style={{marginBottom: "15px"}}
                onClick={() => navigateTo(`/search/foodliste/${items.recipe.label}`)}
              >
                {items.recipe.label}
              </button>
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
        ))}
      </div>
    </div>
  );
}
