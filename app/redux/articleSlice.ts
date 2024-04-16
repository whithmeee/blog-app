"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ArticleState {
    article: string[];
}

const initialState: ArticleState = {
    article: [],
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setArticle: (state, action: PayloadAction<string>) => {
            state.article.push(action.payload);
        },
    },
});

export const { setArticle } = articleSlice.actions;

export default articleSlice.reducer;
