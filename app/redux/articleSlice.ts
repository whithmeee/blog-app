"use client";
import { createSlice } from "@reduxjs/toolkit";

interface ArticleState {
    article: string;
}

const initialState: ArticleState = {
    article: "",
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setArticle: (state, action) => {
            state.article = action.payload;
        },
        clearArticle: (state) => {
            state.article = "";
        },
    },
});

export const { setArticle, clearArticle } = articleSlice.actions;

export default articleSlice.reducer;
