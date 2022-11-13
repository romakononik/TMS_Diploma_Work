import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { fetchBooksSearch } from "../../fetchData/fetchBooks/fetchBooksSearch"
import { AppDispatch, RootState } from '../../store/store'
import { IBooks } from '../../types/books'
import { useSearchParams } from 'react-router-dom'

import { Pagination } from "../../components/Pagination/Pagination"

import "./booksSearch.css"



export const BooksSearch = () => {

    const [params] = useSearchParams()

    const searchValue = params.get("value")
    const { books, total, isLoading, error } = useSelector(
        (store: RootState) => store.books
    );


    const dispatch: AppDispatch = useDispatch();
    const [page, setPage] = useState(1);



    useEffect(() => {
        dispatch(fetchBooksSearch(searchValue, page));
    }, [dispatch, searchValue, page]);


    if (isLoading) {
        return <div>Loading.....</div>
    }

    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div>
            <h1>Search results : {searchValue} </h1>
            <ul className="books">
                {books.map(({ title, price, image, isbn13, subtitle }: IBooks) => {
                    return (
                        <li className="books_card" key={isbn13}>
                            <img alt="image_loading_error" className="books_image" src={image} />
                            <div className='books_content'>
                                <Link to={`/books/${isbn13}`} className="books_title">{title}</Link>
                                <div className='books_subtitle'>{subtitle}</div>
                                <div className='books_footer'>
                                    <div className="books_price">{price}</div>
                                </div>
                            </div>
                        </li>

                    )
                })}
            </ul>
            <Pagination
                onNext={() => {
                    setPage(page + 1);
                }}
                onPrev={() => {
                    setPage(page - 1);
                }}
                onPage={(value: number) => {
                    setPage(value);
                }}
                currentPage={page}
                pagesCount={Math.ceil(Number(total) / 10)}
            />
        </div>
        // https://api.itbook.store/1.0/books/
    )
}
