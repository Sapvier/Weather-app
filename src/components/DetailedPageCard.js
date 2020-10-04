import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchForecast} from "../redux/actions";
import DetailedCard from "./DetailedCard";
import {v4 as uuidv4} from "uuid";
import {Redirect} from "react-router-dom";


const DetailedPageCard = () => {
    const dispatch = useDispatch()
    const forecast = useSelector(state => state.forecastReducer.forecast)
    const detailedState = useSelector(state => state.detailedReducer)

    useEffect(() => {
        dispatch(fetchForecast(detailedState.lat, detailedState.lon))
        console.log(forecast)
    }, [])

    return (
        forecast.map(forecast => <DetailedCard forecast={forecast} key={uuidv4()} />)
    )

}

export default DetailedPageCard

