import React from "react"
import {NavLink, Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {goBack} from "../redux/actions"

const DetailedCard = ({forecast}) => {

    const dispatch = useDispatch()
    const town = useSelector(state => state.detailedReducer)

    const clickHandler = () => {
        dispatch(goBack())
        console.log(forecast)
    }
    if (forecast.timezone === undefined) {
        return <Redirect to="/"/>
    }
    else return (
            <div className="col">
                <div className="card teal darken-2">
                    <div className="card-content white-text">
                        <h3 className="card-title center-align amber-text text-accent-1"><strong>Weather forecast for {town.name}</strong></h3>
                        <NavLink to="/">
                            <button className="waves-effect waves-light btn" onClick={clickHandler}>&#8592;</button>
                        </NavLink>
                    </div>
                    <div className="row center-align">
                        <div className="card small teal darken-4 col s12 m12 l4">
                            <div className="card-content white-text">
                                <p className="card-title">&nbsp;</p>
                                <p className="card-title center-align">Temperature, &#8451; </p>
                                <p className="card-title center-align">Feels like, &#8451;</p>
                                <p className="card-title center-align">Humidity, %</p>
                                <p className="card-title center-align">Wind, km/h</p>
                                <p className="card-title center-align">Pressure, mb</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s6 m6 l2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-1">Morning</p>
                                <p className="card-title center-align">
                                    <strong>{Math.round(forecast.daily[0].temp.morn)}</strong></p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].feels_like.morn)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s6 m6 l2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-1">Day</p>
                                <p className="card-title center-align">
                                    <strong>{Math.round(forecast.daily[0].temp.day)}</strong></p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].feels_like.day)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s6 m6 l2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-1">Evening</p>
                                <p className="card-title center-align">
                                    <strong>{Math.round(forecast.daily[0].temp.eve)}</strong></p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].feels_like.eve)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                        <div className="card-panel hoverable small teal darken-4 col s6 m6 l2">
                            <div className="card-content white-text">
                                <p className="card-title center-align amber-text text-accent-1">Night</p>
                                <p className="card-title center-align">
                                    <strong>{Math.round(forecast.daily[0].temp.night)}</strong></p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].feels_like.night)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].humidity)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].wind_speed)}</p>
                                <p className="card-title center-align">{Math.round(forecast.daily[0].pressure)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default DetailedCard;
