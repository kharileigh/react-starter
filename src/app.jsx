import React from "react";
// import Randomiser from './components/Randomiser.jsx';
// import Effects from './components/Effects.jsx'
// import Beers from './components/Beers.jsx'
import AxiosBeers from './components/AxiosBeers.jsx'

const App = () => {

    const animalOptions = ["duck", "bear", "toad",
                           "magpie", "giraffe"]

    return <>
            <h1>Animals!</h1>
            <AxiosBeers />
           </>
}

export default App;