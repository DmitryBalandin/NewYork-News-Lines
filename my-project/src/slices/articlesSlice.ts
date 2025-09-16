import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const articlesAdapter = createEntityAdapter({
    selectId: (article: any): string => article._id,
});

const initialState = articlesAdapter.getInitialState();

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles: (state,{payload})=> {
            console.log(state,payload)
            const listArticleTypeArticle = payload.filter(({document_type}:{document_type:string}) =>{return document_type === 'article'})
            articlesAdapter.addMany(state,listArticleTypeArticle)
        },
    }
});

export default articlesSlice.reducer
export const { addArticles } = articlesSlice.actions;
export const selectors = articlesAdapter.getSelectors((state:any) => state.articlesReducer)

