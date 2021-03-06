import React from "react"
import {NavLink} from "react-router-dom"
import {connect, useDispatch} from "react-redux"
import {fetchCards} from "../redux/actions"

const Card = ({card, deleteTown, deleteCard, showDetailedCard}) => {

    const dispatch = useDispatch()
    const closeHandler = () => {
        deleteTown(card.name)
        deleteCard(card.name)
    }

    const refreshHandler = () => {
        dispatch(fetchCards(card.name))
        deleteCard(card.name)
    }

    const detailedClickHandler = () => {
        let coordinates = {
            lat: card.coord.lat,
            lon: card.coord.lon,
            name: card.name
        }
        showDetailedCard(coordinates)
    }

    return (
             <div className="col s12 m3">
                 <div className="card teal darken-2">
                     <span className="closeButton" onClick={closeHandler}>&#10005;</span>
                     <div className="card-content white-text">
                         <h3 className="card-title">{card.name}</h3>
                         <p>{card.weather[0].main} ({card.weather[0].description})</p>
                         <p>Temperature: { Math.round(card.main.temp)}&#176;</p>
                         <p className="grey-text text-lighten-1">Feels like: { Math.round(card.main.feels_like)}&#176;</p>
                     </div>
                     <div className="card-action">
                         <NavLink to="/detailed" onClick={detailedClickHandler}>Detailed Forecast</NavLink>
                         <button className="waves-effect waves-light btn-small" onClick={refreshHandler}>Refresh</button>
                     </div>
                 </div>
             </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTown: (town) => {dispatch({type: 'DELETE_TOWN', payload: town})},
        deleteCard: (town) => {dispatch({type: 'DELETE_CARD', payload: town})},
        showDetailedCard: (coordinates) => {dispatch({type: 'SHOW_DETAILED', payload: coordinates})}
    }
}

export default connect(null, mapDispatchToProps)(Card);


