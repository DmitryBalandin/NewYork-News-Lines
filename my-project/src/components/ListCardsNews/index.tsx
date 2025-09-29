import React, { useRef, useEffect, useState } from "react";
import { CardNews } from "../CardNews";
import axios from "axios";
import styles from './styles.module.scss';
import type { Article } from "../../types/Api types";
import { getNextDay, getTodayDay, createQuery, getDayFromToday } from "./helpers";
import type { DataContents } from "../../types/Api types";
import { useDispatch } from "react-redux";
import { addArticles } from "../../slices/articlesSlice";
import { ClipLoader } from "react-spinners";


interface ListCardsNews {
    children: Array<Article>
}
type Params = {
    [key: string]: string;
};

 const params: Params = {
    'begin_date': getDayFromToday(new Date(), 0),
    'end_date': getDayFromToday(new Date(), 1),
    "page": '1',
    'api-key': 'rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP',

};


const fetchData = async (query: string) => {

    const response = await axios.get(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(query)}`)
    const dataContents: DataContents = JSON.parse(response.data.contents)
    console.log(dataContents)
    return dataContents

}
export const ListCardsNews: React.FC<ListCardsNews> = ({ children }) => {
    const lastArticle = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [daysFromToday, setDaysFromToday] = useState<number>(1)
    const observerLoader = useRef<IntersectionObserver | null>(null);

   
    const override: React.CSSProperties = {
        display: "block",
        margin: "0 auto",
    };
    const actionInSight = (entries:any) => {
        if (entries[0].isIntersecting) {
            setIsLoading(true)
            params.page = `${+params.page + 1}`
            const query: string = createQuery(params)
            console.log('Hello');
            fetchData(query).then((dataContents) => {
                // if(!dataContents.response.docs){
                //     console.log('New date')
                //     return
                // } 
                dispatch(addArticles(dataContents.response.docs))
            }).finally(()=>{
                setIsLoading(false)
            })
            
        }
    };
    useEffect(() => {
        const query: string = createQuery(params)

        fetchData(query).then((dataContents) => {
            dispatch(addArticles(dataContents.response.docs))

        })

    }, [])

    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }
        observerLoader.current = new IntersectionObserver(actionInSight);

        if (lastArticle.current) {
            observerLoader.current.observe(lastArticle.current);
        }
        return () => {
            if (observerLoader.current) {
                observerLoader.current.disconnect();
            }
        };
    }, [lastArticle.current, children.length]);

    return (<div className={styles.container}  >
        {children.map((article: Article, index: number) => {
            if (index + 1 === children.length) {
                return <CardNews key={article._id} ref={lastArticle} >{article}</CardNews>;
            }
            return (
                <CardNews key={article._id} >{article}</CardNews>)
        })}
        <ClipLoader
        loading={isLoading}
        cssOverride={override}
        speedMultiplier={1}
        color="blue"
        />
    </div>)
}
