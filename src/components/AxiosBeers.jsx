import React, { useState, useEffect } from "react";
import axios from "axios";

const Beers = () => {

    const [beers, setBeers] = useState([]);

    async function getBeers() {
        try {
            const result = await axios.get("https://api.punkapi.com/v2/beers");
            const beerNames = result.data.map(b => b.name);
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