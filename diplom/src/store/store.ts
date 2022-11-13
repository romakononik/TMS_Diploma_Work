import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksSlise from "./booksStore/booksStore"
import userSlice from "./userStore/userStore"

const rootReducer = combineReducers({
    books: booksSlise,
    user: userSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;