import React from 'react';
import './Card.css';
import CardContent from "./CardContent";
import CardBanner from "./CardBanner";

const CardContainer = (props) => {
    return (
        <div className="card">
            <CardBanner />
        </div>
    );
}
    
export default CardContainer;