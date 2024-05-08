import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

export default function Foodliste({ query, setQuery, recepte, setRecepte }) {
  console.clear();

  const { foodliste } = useParams();
  console.log(foodliste);
  setQuery(foodliste);
  const navigateTo = useNavigate();

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <div style={{width: "100%", display: "flex",justifyContent: "space-around", flexWrap: "wrap", padding: "2%" }}>
        {recepte &&
          recepte.map((items, index) => (
            <Card key={index} style={{ width: "16rem", margin: "7px", boxShadow: "2px 2px 10px" }}>
              <Card.Img variant="top" src={items.recipe.image} />
              <Card.Body>
                <button
                  onClick={() => {
                    navigateTo(`/search/${foodliste}/${items.recipe.label}`);
                  }}
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
                      style={{
                        color: "rgb(108, 196, 251)",
                        marginRight: "5px",
                      }}
                    >
                      {Math.floor(items.recipe.calories)}
                    </span>
                    CALORIES
                  </label>
                </ListGroup.Item>
                <ListGroup.Item>
                  <label>
                    <span
                      style={{
                        color: "rgb(108, 196, 251)",
                        marginRight: "5px",
                      }}
                    >
                      {items.recipe.ingredients.length}
                    </span>
                    INGREDIENTS
                  </label>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
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
