import React, {forwardRef} from "react";
import styles from './styles.module.scss'
import { Link } from "react-router-dom";
import type { Article } from "../../types/Api types";
interface CardNews {
    children: Article,
    ref?:any
}

export const CardNews: React.FC<CardNews> = ({ children ,ref}) => {
    const { pub_date: datePublish, abstract, multimedia, web_url: webLink, source } = children;
    return (
        <article className={styles.article} ref={ref} >
            <div className={styles.articleContainer}>
                <div className={styles.articleSourse}>
                    <Link to={webLink} target="_blank" className={styles.articleSourseLink}>{source}</Link>
                </div>
                <img src={multimedia.default.url || null} alt="" className={styles.articleImage} />
                <p className={styles.articleText}>{abstract}</p>
                <span className={styles.articleDatePublish}>{datePublish}</span>
            </div>
        </article>

    )
}