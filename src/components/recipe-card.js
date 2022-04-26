import React, { useState } from "react";

import IngredientList from "./ingredient-list";
import LikeButton from "./like-button";

function RecipeCard (props) {

    const [likes, setLikes] = useState(0);

    function incrementLikes () {
        setLikes(prevLikes => prevLikes + 1);
    }
    
    return <div>
        <h2>{props.name}</h2>
        <IngredientList ingredients={props.ingredients}/>
        <LikeButton count={likes} action={incrementLikes} />
    </div>
}

export default RecipeCard