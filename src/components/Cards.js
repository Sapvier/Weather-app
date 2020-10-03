import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {fetchCards} from '../redux/actions'
const {uuid} = require('uuidv4');

const Cards = () => {
    const dispatch = useDispatch()
    let cards = useSelector(state => state.cardsReducer.cards)

    useEffect(() => {
        dispatch(fetchCards())
    }, []);

    return (
        cards.map(card => <Card card={card} key={uuid()} />)
    )
}
export default Cards