import React, { useRef, useEffect } from "react";
import { CardNews } from "../CardNews";
import styles from './styles.module.scss';
import type { Article } from "../../types/Api types";
interface ListCardsNews {
    children: Array<Article>
}

export const ListCardsNews: React.FC<ListCardsNews> = ({ children }) => {
    const lastArticle = useRef<HTMLDivElement>(null);
     const observerLoader = useRef<IntersectionObserver | null>(null);
      const actionInSight = (entries: any) => {
        if (entries[0].isIntersecting) {
            console.log('Hello');
        }
    };
 
    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }
        console.log('1',lastArticle.current)
        observerLoader.current = new IntersectionObserver(actionInSight);

        if (lastArticle.current) {
            console.log('2')
            observerLoader.current.observe(lastArticle.current);
        }
        return () => {
            if (observerLoader.current) {
                observerLoader.current.disconnect();
            }
        };
    },[lastArticle.current, children.length]);

    console.log(lastArticle)
    return (<div className={styles.container}  >
        {children.map((article: Article, index: number) => {
            if (index + 1 === children.length) {
                return <CardNews key={article._id} ref={lastArticle} >{article}</CardNews>;
            }
            return (
                <CardNews key={article._id} >{article}</CardNews>)
        })}
    </div>)
}
