import React from "react";
import { CardNews } from "../CardNews";
import styles from './styles.module.scss'
interface ListCardsNews {
    children: any
}

export const ListCardsNews: React.FC<ListCardsNews> = ({ children }) => {
    console.log('children', children)
    return (<div className={styles.container}>
            {children.map((article: any) => {
                return (
                    <CardNews>{article}</CardNews>)
            })}
    </div>)
}