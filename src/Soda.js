import React from "react";
import { Link } from "react-router-dom";
import sodaPic from "./Soda.png";
import "./Soda.css"
import "./Text.css";


function Soda(){
    return (
        <div className="Soda">
            <img src={sodaPic} alt="I AM SODA"/>
            <div className="Text">
                <h1>POP NO BUENO</h1>
                <h1><Link to ="/">Go Back</Link></h1>
            </div>
            <img src={sodaPic} alt="I AM SODA"/>
        </div>
    );
}
export default Soda;