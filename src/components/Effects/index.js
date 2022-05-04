import React, { useState, useEffect} from 'react';

const Effects = () => {

    const [val, setVal] = useState(0);

    useEffect(() => {
        console.log("I run once")
    }, []) // Empty brackets mean an empty list = run on 1st appearance only


    // Run when specific things change
    useEffect(() => {
        console.log("I run only when something I listen to changes.");
    }, [val])


    // SET TIMEOUT | USED TO CLEAR AN OUTPUT AFTER CERTAIN TIME  automatically asynchronously
    // MUST CLEAN UP USE EFFECT | TO RETURN SYSTEM TO NORMAL 
    useEffect(() => {

        // must place setTimeout inside a variable
        const timer = setTimeout(() => {
            console.log("I take 3 seconds!")
        }, 3000)

        // this function runs when everything is finished, then proceeds
        return () => {
            console.log("I am finished.")
            clearTimeout(timer);
        }

    }, [])

    function handleClick() {
        setVal(prev => prev + 1);
    }

    // // Run on every update
    // useEffect(() => {
    //     console.log("I run everytime something changes")
    //     setVal(prev => prev + 1) 
    // }) // no brackets - run on any change | creates an infinite loop

    return <div>
                <h1>Val: {val}</h1>
                <button onClick={handleClick}>Click Me!</button>
            </div>

}

export default Effects;