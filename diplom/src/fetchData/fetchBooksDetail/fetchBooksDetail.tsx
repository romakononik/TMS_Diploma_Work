import {
    booksLoading,
    booksError,
    booksDetails
} from "../../store/booksStore/booksStore"
import { AppDispatch } from "../../store/store"
import { useDispatch } from "react-redux";

export const fetchBooksDetailAsync = (currentData: string | undefined) => {
    return async (dispatch: AppDispatch = useDispatch()) => {
        try {
            dispatch(booksLoading());
            const response = await fetch(
                `https://api.itbook.store/1.0/books/${currentData}`
            ).then((response) => response.json());
            dispatch(booksDetails(response));
        } catch (error) {
            dispatch(booksError(error));
        }
    };
};