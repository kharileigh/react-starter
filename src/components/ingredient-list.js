import React from 'react';

const IngredientList = (props) => {
    return <ul>
        {props.ingredients.map(i => <li key={i} className="ingredient">{i}</li>)}
    </ul>
}

export default IngredientList;