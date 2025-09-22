import React, { useState, useEffect, useRef, type JSX } from "react"
import styles from './styles.module.scss'
import axios from "axios"
import { ListCardsNews } from "../ListCardsNews"
import { getNextDay, getTodayDay, createQuery } from "./helpers"
import { addArticles } from "../../slices/articlesSlice"
import { useDispatch, useSelector } from "react-redux";
import { selectors as selectorsArticle } from "../../slices/articlesSlice";
import type { DataContents } from "../../types/Api types"
import { ClipLoader } from "react-spinners"



type Params = {
    [key: string]: string;
};

interface MainProps {

};

const params: Params = {
    'begin_date': getTodayDay(),
    'end_date': getNextDay(new Date()),
    "page": '0',
    'api-key': 'rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP',

};
const fetchData = async (query: string) => {

    const response = await axios.get(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(query)}`)
    const dataContents: DataContents = JSON.parse(response.data.contents)
    return dataContents

}
export const Main: React.FC<MainProps> = ({ }): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false)
   const mainRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch();
    const articles = useSelector(selectorsArticle.selectAll);
    window.addEventListener('scroll', () => {
        const elem = mainRef.current as HTMLDivElement
        const box = elem.getBoundingClientRect() 
      
    })

    // function onScrollList(event: any) {
    //     console.log(event.target)
    //     const scrollBottom = event.target.scrollTop +
    //         event.target.offsetHeight == event.target.scrollHeight;

    //     if (scrollBottom) {
    //         console.log(event.target);
    //     }
    // }



    useEffect(() => {
        const query: string = createQuery(params)
        setIsLoading(true)
        fetchData(query).then((dataContents) => {
            dispatch(addArticles(dataContents.response.docs))
            setIsLoading(false)
        })

    }, [])


    return (
        <div ref={mainRef}>

            <ListCardsNews>{articles}</ListCardsNews>

        </div>
    )
}