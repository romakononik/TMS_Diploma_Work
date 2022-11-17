import {
    booksLoading,
    booksError,
    booksDetails
} from "../../store/booksStore/booksStore"
import { AppDispatch } from "../../store/store"
import { useDispatch } from "react-redux";
import { BOOKS_API } from "../../constants/endpoints"

export const fetchBooksDetailAsync = (currentData: string | undefined) => {
    return async (dispatch: AppDispatch = useDispatch()) => {
        try {
            dispatch(booksLoading());
            const response = await fetch(
                `${BOOKS_API}/books/${currentData}`
            ).then((response) => response.json());
            dispatch(booksDetails(response));
        } catch (error) {
            dispatch(booksError(error));
        }
    };
};