import React, { useState } from "react";
import { Link } from "react-router-dom";
import chipsPic from "./Chips.png";
import "./Chips.css";
import "./Text.css";

function Chips() {
    const [bags, setBags] = useState([]);

    function handleClick(){
        /* x and y used to calculate location based on the curr window */
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();

        setBags(b => [...b, { x, y }]);
    }

    const chips = bags.map((bag, i) => (
        <img 
        key={i} 
        src={chipsPic} 
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        />
    ));

    return (
        <div className="Chips">
            <div className="Text">
                <h1>Bags Eaten: {bags.length}</h1>
                <button onClick={handleClick}> Chips Please</button>
                <h1> <Link to= "/">Go Back</Link></h1>
            </div>
            {chips}
        </div>
    );
}

export default Chips;
