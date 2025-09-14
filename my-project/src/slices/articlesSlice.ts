import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const articlesAdapter = createEntityAdapter({
    selectId: (article: any): string => article._id,
});

const initialState = articlesAdapter.getInitialState();

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles: articlesAdapter.addMany,
    }
});

export default articlesSlice.reducer
export const { addArticles } = articlesSlice.actions;
export const selectors = articlesAdapter.getSelectors((state:any) => state.articlesReducer)

