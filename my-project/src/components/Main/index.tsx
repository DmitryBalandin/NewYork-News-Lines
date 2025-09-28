import React, { useState, type JSX } from "react"
import styles from './styles.module.scss'
import { ListCardsNews } from "../ListCardsNews"

import {  useSelector } from "react-redux";
import { selectors as selectorsArticle } from "../../slices/articlesSlice";
import { ClipLoader } from "react-spinners"



type Params = {
    [key: string]: string;
};

interface MainProps {

};


export const Main: React.FC<MainProps> = ({ }): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false)

    const articles = useSelector(selectorsArticle.selectAll);
  


    return (
        <div >
            <ListCardsNews>{articles}</ListCardsNews>
        </div>
    )
}