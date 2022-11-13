import { createSlice } from "@reduxjs/toolkit";
import { IBooks, IBooksDetails } from "../../types/books";


export interface IBooksSliceInitialState {
    isLoading: boolean;
    books: IBooks[];
    booksDetails?: IBooksDetails | null;
    error: any;
    page?: string;
    total?: string;

}

const initialState: IBooksSliceInitialState = {
    isLoading: false,
    books: [],
    error: null,
    booksDetails: {},
    page: "",
    total: "",
};

const booksSlise = createSlice({
    name: "books",
    initialState,
    reducers: {
        booksLoading() {
            return { isLoading: true, books: [], error: null };
        },
        booksSuccess(_, action) {
            return {
                isLoading: false,
                books: action.payload.books,
                error: null,
                page: action.payload.page,
                total: action.payload.total,
            };
        },
        booksError(_, action) {
            return {
                isLoading: false,
                books: [],
                error: action.payload,
            };
        },
        booksDetails(_, action) {
            return {
                isLoading: false,
                booksDetails: action.payload,
                books: [],
                error: null
            }
        }
    },
    extraReducers: {},
});

export const {
    booksDetails,
    booksLoading,
    booksSuccess,
    booksError,
} = booksSlise.actions;
export default booksSlise.reducer;