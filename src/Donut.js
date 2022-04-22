import React from "react";
import { Link } from "react-router-dom";
import "./Text.css";
import "./Donut.css";



const donutsUrl = "https://c.tenor.com/_dXBMirjeqsAAAAM/donuts-happy-donut-day.gif"

function Donut(){
    return (
        <div className="Donut" style={{ backgroundImage: `url(${donutsUrl})`}}>
            <div className="Text">
                <h1>mmmmmmm.. dooonuts..</h1>
                <h1><Link to="/">Go Back</Link></h1>
            </div>
        </div>
    );
}
export default Donut;