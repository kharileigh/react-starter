import axios from 'axios';
import React, { useState, useEffect} from 'react';

const Beers = () => {

    const [beerList, setBeerList] = useState (["Leffe", "Blue Moon"]);

    // ADD THIS TO UPDATE THE CURRENT PAGE BY MOVING 1 PAGE 
    const [page, setPage] = useState(1);

    useEffect(() => {

        async function loadBeers() {
            try {
                                            // VISIT URL | AFTER ? IS A QUERY PARAMETER 
                // const result = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
                // const data = await result.json();
                const result = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`);
                const beerNames = result.data.map(b => b.name); // just data gettin from fetch
                setBeerList(beerNames);

            } catch (err) {
                console.log(err);
            }
        }

        loadBeers();

        // ADD PAGE AS A DEPENDENCY | everytime page changes useEffect and call our function
    }, [page])

    // FUCNTION TO LET USER CLICK THROUGH TO DIFFERENT PAGES
    function handleClick() {
        setPage(prev => prev + 1);
    }

    return <>
    
            <h1>Beers</h1>
            <button onClick={handleClick}>Next (current page: {page})</button>
                                        {/* ----- must include  */}

            <ul>
             {/* ADD EACH INDIVIDUAL LIST ITEM MUST HAVE A KEY | TO BE ABLE TO CHANGE ONE ITEM AT A TIME */}
                { beerList.map((b, i) => 
                    <li key={i}>{b}</li>
                )}
            </ul>

            </>
}

export default Beers;