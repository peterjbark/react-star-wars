import React from "react";

export default function CardTemplate(ship){
    return(
        <div className = "card">
            <h1>{ship.name}</h1>
            <h3>{ship.model}</h3>
        </div>
    )
}