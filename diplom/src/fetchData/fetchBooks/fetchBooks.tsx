import {
    booksLoading,
    booksSuccess,
    booksError,
} from "../../store/booksStore/booksStore"
import { AppDispatch } from "../../store/store"
import { useDispatch } from "react-redux";
import { BOOKS_API } from "../../constants/endpoints"

export const fetchBooksListAsync = () => {
    return async (dispatch: AppDispatch = useDispatch()) => {
        try {
            dispatch(booksLoading());
            const response = await fetch(
                `${BOOKS_API}/new`
            ).then((response) => response.json());
            dispatch(booksSuccess({ books: response.books }));
        } catch (error) {
            dispatch(booksError(error));
        }
    };
};

