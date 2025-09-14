import React, { useState, useEffect, type JSX } from "react"
import styles from './styles.module.scss'
import axios from "axios"
import { ListCardsNews } from "../ListCardsNews"
import { getNextDay, getTodayDay, createQuery } from "./helpers"
import { addArticles } from "../../slices/articlesSlice"
import { useDispatch, useSelector } from "react-redux";
import { selectors as selectorsArticle } from "../../slices/articlesSlice"

const params = {
    'begin_date': getTodayDay(),
    'end_date': getNextDay(new Date()),
    "page": '0',
    'api-key': 'rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP',

};


interface MainProps {

};

export const Main: React.FC<MainProps> = ({ }): JSX.Element => {
    const dispatch = useDispatch(); 
    const articles = useSelector(selectorsArticle.selectAll);
    useEffect(() => {
        const query = createQuery(params)
        const fetchData = async () => {
            const response = await axios.get(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(query)}`)
            dispatch(addArticles(JSON.parse(response.data.contents).response.docs))
        }
        fetchData()
    }, [])
 
    return (
        <main>
            <ListCardsNews>{articles}</ListCardsNews>
        </main>
    )
}