import React from "react";
import styles from './styles.module.scss'
interface CardNews {
    children: any
}

export const CardNews: React.FC<CardNews> = ({ children }) => {
    const { pub_date: datePublish, abstract, multimedia, web_url: webLink, source } = children;
    console.log(source, webLink, datePublish, abstract, multimedia.thumbnail.url, multimedia.default.url)
    return (
        <article className={styles.article}>
            <div className={styles.articleContainer}>
                <div className={styles.articleSourse}>
                    <a href={webLink} className={styles.articleSourseLink}>{source}</a>
                </div>
                <img src={multimedia.default.url} alt="" className={styles.articleImage} />
                <p className={styles.articleText}>{abstract}</p>
                <span className={styles.articleDatePublish}>{datePublish}</span>
            </div>
        </article>

    )
}