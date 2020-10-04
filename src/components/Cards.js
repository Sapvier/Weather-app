import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {fetchCards} from '../redux/actions'
import { v4 as uuidv4 } from 'uuid';

const Cards = () => {
    const dispatch = useDispatch()
    let cards = useSelector(state => state.cardsReducer.cards)
    let fetchedTowns = useSelector(state => state.townsReducer)

    // useEffect(() => {
    //     fetchedTowns.map(town => dispatch(fetchCards(town)))
    // }, [fetchedTowns, dispatch])

    return (
        cards.map(card => <Card card={card} key={uuidv4()} />)
    )
}

export default Cards