import React, { useRef, useEffect } from "react";
import { CardNews } from "../CardNews";
import styles from './styles.module.scss';
import type { Article } from "../../types/Api types";
interface ListCardsNews {
    children: Array<Article>
}

export const ListCardsNews: React.FC<ListCardsNews> = ({ children }) => {
    const lastArticle = useRef<HTMLDivElement | null>(null);
    console.log(lastArticle.current);
    const observerLoader:any = useRef(null);
    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }

        observerLoader.current = new IntersectionObserver(actionInSight);

        if (lastArticle.current) {
            observerLoader.current.observe(lastArticle.current);
        }
    }, []);

    const actionInSight = (entries: any) => {
        if (entries[0].isIntersecting) {
            console.log('Hello');
        }
    };
    return (<div className={styles.container}>
        {children.map((article: Article, index: number) => {
            if (index + 1 === children.length) {
                return <CardNews key={article._id} ref={lastArticle} >{article}</CardNews>;
            }
            return (
                <CardNews key={article._id} >{article}</CardNews>)
        })}
    </div>)
}
