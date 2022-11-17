import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { fetchBooksListAsync } from "../../fetchData/fetchBooks/fetchBooks"
import { AppDispatch, RootState } from '../../store/store'
import { IBooks } from '../../types/books'
import { useAuth } from "../../hooks/use-auth"
import { Loading } from "../../components/index"
import "./booksPost.css"

export const BooksPost = () => {

    const { isAuth, email } = useAuth()


    const { books, isLoading, error } = useSelector(
        (store: RootState) => store.books
    );

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksListAsync());
    }, [dispatch]);


    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <div>ERROR</div>
    }

    return isAuth ? (
        <div>
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
                                    <div className='stars'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                fill="#E7E7E7"
                                                fillRule="evenodd"
                                                d="M10.932 13.5a.653.653 0 01-.296-.071L7 11.566 3.364 13.43a.65.65 0 01-.671-.047.614.614 0 01-.253-.606l.694-3.943L.193 6.042a.61.61 0 01-.162-.635.633.633 0 01.513-.422l4.067-.58L6.43.819c.214-.423.926-.423 1.14 0L9.39 4.406l4.067.579c.24.034.439.197.513.422a.61.61 0 01-.162.635l-2.941 2.791.694 3.943a.613.613 0 01-.253.606.648.648 0 01-.375.118z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                fill="#E7E7E7"
                                                fillRule="evenodd"
                                                d="M10.932 13.5a.653.653 0 01-.296-.071L7 11.566 3.364 13.43a.65.65 0 01-.671-.047.614.614 0 01-.253-.606l.694-3.943L.193 6.042a.61.61 0 01-.162-.635.633.633 0 01.513-.422l4.067-.58L6.43.819c.214-.423.926-.423 1.14 0L9.39 4.406l4.067.579c.24.034.439.197.513.422a.61.61 0 01-.162.635l-2.941 2.791.694 3.943a.613.613 0 01-.253.606.648.648 0 01-.375.118z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                fill="#E7E7E7"
                                                fillRule="evenodd"
                                                d="M10.932 13.5a.653.653 0 01-.296-.071L7 11.566 3.364 13.43a.65.65 0 01-.671-.047.614.614 0 01-.253-.606l.694-3.943L.193 6.042a.61.61 0 01-.162-.635.633.633 0 01.513-.422l4.067-.58L6.43.819c.214-.423.926-.423 1.14 0L9.39 4.406l4.067.579c.24.034.439.197.513.422a.61.61 0 01-.162.635l-2.941 2.791.694 3.943a.613.613 0 01-.253.606.648.648 0 01-.375.118z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                fill="#E7E7E7"
                                                fillRule="evenodd"
                                                d="M10.932 13.5a.653.653 0 01-.296-.071L7 11.566 3.364 13.43a.65.65 0 01-.671-.047.614.614 0 01-.253-.606l.694-3.943L.193 6.042a.61.61 0 01-.162-.635.633.633 0 01.513-.422l4.067-.58L6.43.819c.214-.423.926-.423 1.14 0L9.39 4.406l4.067.579c.24.034.439.197.513.422a.61.61 0 01-.162.635l-2.941 2.791.694 3.943a.613.613 0 01-.253.606.648.648 0 01-.375.118z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                fill="#E7E7E7"
                                                fillRule="evenodd"
                                                d="M10.932 13.5a.653.653 0 01-.296-.071L7 11.566 3.364 13.43a.65.65 0 01-.671-.047.614.614 0 01-.253-.606l.694-3.943L.193 6.042a.61.61 0 01-.162-.635.633.633 0 01.513-.422l4.067-.58L6.43.819c.214-.423.926-.423 1.14 0L9.39 4.406l4.067.579c.24.034.439.197.513.422a.61.61 0 01-.162.635l-2.941 2.791.694 3.943a.613.613 0 01-.253.606.648.648 0 01-.375.118z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
        // https://api.itbook.store/1.0/books/
    ) : (<Navigate to={"/login"} />)
}
