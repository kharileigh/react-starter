import React from 'react';

const IngredientList = (props) => {
    return <ul>
        {props.ingredients.map(i => <li>{i}</li>)}
    </ul>
}

export default IngredientList;