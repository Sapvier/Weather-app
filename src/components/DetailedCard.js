import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {goBack} from "../redux/actions";

const DetailedCard = ({forecast}) => {
    const dispatch = useDispatch()
    let town = useSelector(state => state.detailedReducer)
    const clickHandler = () => {
        dispatch(goBack())
    }
    return (
            <div className="col">
                <div className="card teal darken-2">
                    <div className="card-content white-text">
                        <h3 className="card-title center-align amber-text text-accent-3"><strong>Weather forecast for {town.name}</strong></h3>
                        <NavLink to="/">
                            <button className="waves-effect waves-light btn" onClick={clickHandler}>&#8592;</button>
                        </NavLink>
                    </div>
                    <div className="row center-align">
                        <div className="card small teal darken-4 col s4">
                            <div className="card-content white-text">
                                <p className="card-title">&nbsp;</p>
                                <p className="card-title center-align amber-text text-accent-3">Temperature, &#8451; </p>
                                <p className="card-title center-align amber-text text-accent-3">Feels like, &#8451;</p>
                                <p className="card-title center-align amber-text text-accent-3">Humidity, %</p>
                                <p className="card-title center-align amber-text text-accent-3">Wind, km/h</p>
                                <p className="card-title center-align amber-text text-accent-3">Pressure, mb</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-3">Morning</p>
                                <p className="card-title center-align amber-text text-accent-1">
                                    <strong>{Math.round(forecast.daily[0].temp.morn)}</strong></p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].feels_like.morn)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-3">Day</p>
                                <p className="card-title center-align amber-text text-accent-1">
                                    <strong>{Math.round(forecast.daily[0].temp.day)}</strong></p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].feels_like.day)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-3">Evening</p>
                                <p className="card-title center-align amber-text text-accent-1">
                                    <strong>{Math.round(forecast.daily[0].temp.eve)}</strong></p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].feels_like.eve)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-3">Night</p>
                                <p className="card-title center-align amber-text text-accent-1">
                                    <strong>{Math.round(forecast.daily[0].temp.night)}</strong></p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].feels_like.night)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align amber-text text-accent-1">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default DetailedCard;
