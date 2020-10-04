import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {fetchCards} from '../redux/actions'
import { v4 as uuidv4 } from 'uuid';

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cardsReducer.cards)
    const fetchedTowns = JSON.parse(localStorage.getItem('state')) || []

    useEffect(() => {
        fetchedTowns.map(town => dispatch(fetchCards(town)))
    }, [])

    if (fetchedTowns.length > 0) {
        return (
            cards.map(card => <Card card={card} key={uuidv4()}/>)
        )
    }
    else return <h4 className="center-align">Add the city to show the weather</h4>
}

export default Cards