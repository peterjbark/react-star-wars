import React, { useEffect, useState } from "react";
import getAllStarShips from "../services/sw-api";
import CardTemplate from "./CardTemplate";
import "../index.css";

export default function StarShipCard (){
    
    const [ships, setShips] = useState([]);

    useEffect(()=>{
        const fetchShips = async () =>{
            const shipData = await getAllStarShips();
            setShips(shipData);
        }
        fetchShips();
    }, []);

    return(
        <div className = "ships-data">
            {ships.map((ship) => {
                return (
                    <CardTemplate
                        name = {ship.name}
                        model = {ship.model}
                    />
                )
            })}
        </div>
    )
};