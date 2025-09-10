import React, { useEffect, type JSX } from "react"
import styles from './styles.module.scss'
import axios from "axios"
import { CardsNews } from "../cardsNews"

interface MainProps {

}

export const Main: React.FC<MainProps> = ({ }):JSX.Element => {
    const CORS = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = 'rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP';
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    useEffect(() => {

    }, [])
    const date = new Date();
    const getTodayDay = ():string =>{
        const date = new Date();
        const month = date.getMonth()  < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`; 
        const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
        return `${date.getFullYear()}${month}${day}`
    }
    const today2 = new Intl.DateTimeFormat('fr-CA').format(new Date()).replace(/-/g, '')
    
    const getNextDay = (date:any):string =>{
        date.setDate(date.getDate() + 1)
        const month = date.getMonth()  < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`; 
        const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
        return `${date.getFullYear()}${month}${day}`
    }

    const params = {
        'begin_date': getTodayDay(),
        'end_date': getNextDay(new Date()),
        "page": '0',
        'api-key': 'rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP',

    }

    
    const createQuery = (parametrs: { [key: string]: string }): string => {
        const entriesParametrs = Object.entries(parametrs);
        const queryParametrs = entriesParametrs.map(([key, value]) => {
            return `${key}=${value}`
        }).join('&')
        const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
        console.log(`${BASE_URL}?${queryParametrs}`)
        return `${BASE_URL}?${queryParametrs}`
    }
    const query = createQuery(params)
    const handleClick = async () => {

        const response = await axios.get(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(query)}`, {

        })
       

        console.log(getTodayDay(), getNextDay(new Date()), params.begin_date)
        console.log(JSON.parse(response.data.contents))
    }
    return (
        <div >
            <p className={styles.title}> Hello</p>
            <CardsNews></CardsNews>

           
            <button onClick={handleClick}>axios</button>
        </div>
    )
}