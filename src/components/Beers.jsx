import React, { useState, useEffect } from "react";

const Beers = () => {

    const [beers, setBeers] = useState([]);

    async function getBeers() {
        try {
            const result = await fetch("https://api.punkapi.com/v2/beers");
            const data = await result.json();
            const beerNames = data.map(b => b.name);
            setBeers(beerNames);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBeers();
    }, [])

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
           </>
}



export default Beers;