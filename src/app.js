import React from 'react';

import data from './data';

import RecipeCard from './components/recipeCard';

function App () {

    return <div>
        <h1>Recipes</h1>
        {data["recipes"].map(r => <RecipeCard name={r.name} ingredients={r.ingredients}/>)}
        </div>
}

export default App;