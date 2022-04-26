import React from "react";

import IngredientList from "./ingredientList";

function RecipeCard (props) {
    
    return <div>
        <h2>{props.name}</h2>
        <IngredientList ingredients={props.ingredients}/>
    </div>
}

export default RecipeCard