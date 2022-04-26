import React from 'react';

import data from './data';

import RecipeCard from './components/recipe-card';

function App () {

    return <div>
        <h1>Recipes</h1>
        {data["recipes"].map(r => <RecipeCard key={r.name} name={r.name} ingredients={r.ingredients}/>)}
        </div>
}

export default App;