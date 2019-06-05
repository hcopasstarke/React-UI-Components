import React from 'react';
import './Card.css';
import CardContent from "./CardContent";

const CardBanner = (props) => {
    return (
        <a className="card-banner" href="https://www.reactjs.org">
            <img className="react-image" src="react-logo.png" alt="react logo"></img>
            <CardContent />
        </a>    
    );
}


export default CardBanner;