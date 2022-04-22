import React from "react";
import { Link } from "react-router-dom";
import vendingMachinePic from "./VendingMachine.png";
import "./VendingMachine.css";
import "./Text.css";


function VendingMachine() {
    return(
        <div
        className="VendingMachine"
          style={{ backgroundImage: `url(${vendingMachinePic})` }}>
            <div className="Text">
                <h1>hello i am a vending machine. what would you like to eat?</h1>
            </div>
            <div className="Text">
                <h1><Link to="/soda">Soda</Link></h1>
                <h1><Link to="/chips">Chips</Link></h1>
                <h1><Link to="/donut">Mmmmmmmm..</Link></h1>
            </div>
        </div>
      );
    }
    
    export default VendingMachine;