import React from "react";
import {NavLink} from "react-router-dom";

const Card = ({card}) => {
    return (
        <div className="row">
            <div className="col s12 m3">
                <div className="card teal darken-2">
                    <div className="card-content white-text">
                        <h3 className="card-title">{card.name}</h3>
                        <p>{card.weather[0].main} ({card.weather[0].description})</p>
                        <p>Temperature: { Math.round(card.main.temp)} &#8451;</p>
                        <p className="grey-text text-lighten-1">Feels like: { Math.round(card.main.feels_like)} &#8451;</p>
                    </div>
                    <div className="card-action">
                        <NavLink to="/detailed">Detailed Forecast</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;


