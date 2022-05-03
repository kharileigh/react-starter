import React, { useState } from "react";

const Randomiser = ({ options }) => {
    
    const [currentOption, setCurrentOption] = useState(options[1]);

    function randomiseOption() {
        const newOption = options[Math.floor(Math.random() * options.length)];
        setCurrentOption(newOption);
    }

    return <>
            <h2>{currentOption}</h2>
            <button onClick={randomiseOption}>Randomise!</button>
           </>

}

export default Randomiser;