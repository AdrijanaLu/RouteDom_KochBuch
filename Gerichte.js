import React from "react";
import { useParams } from "react-router-dom";

export default function Gerichte({ meals, setMeals }) {
  const APP_ID = "a99bd604";
  const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";

  const { gerichte } = useParams();
  console.log(gerichte);
  console.log(meals);
  const meal = meals.find((item) => item.recipe.label === gerichte);
  console.log(meal);

  return (
    <div style={{width: "100%", display: "flex"}}>
      {meal && (
        <div style={{width: "100%", display: "flex"}}>
          <div>
            <img src={meal.recipe.image} />
          </div>
          <div style={{padding: "2%", backgroundColor: "lightgray"}}>
            <p>Name der Gerichte: <b><i>{meal.recipe.label}</i></b></p>
            <p>Type: <span style={{textTransform: "uppercase"}}><b><i>{meal.recipe.mealType}</i></b></span></p>
            <p>Calories: <i><b>{parseInt(meal.recipe.calories)}</b></i></p>
          </div>
        </div>
      )}
    </div>
  );
}
