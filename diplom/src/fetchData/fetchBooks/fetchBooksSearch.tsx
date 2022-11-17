import {
    booksLoading,
    booksSuccess,
    booksError,
} from "../../store/booksStore/booksStore"
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { BOOKS_API } from "../../constants/endpoints"

export const fetchBooksSearch = (searchValue: string | null, page: number) => {

    return async (dispatch: AppDispatch = useDispatch()) => {
        try {
            dispatch(booksLoading());
            const response = await fetch(
                `${BOOKS_API}/search/${searchValue}/${page}`
            ).then((response) => response.json());

            dispatch(booksSuccess({ books: response.books, total: response.total, page: response.page }));
        } catch (error) {
            dispatch(booksError(error));
        }
    };
};