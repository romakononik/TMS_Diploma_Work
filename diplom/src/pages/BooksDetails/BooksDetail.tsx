import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchBooksDetailAsync } from "../../fetchData/fetchBooksDetail/fetchBooksDetail"
import { AppDispatch, RootState } from '../../store/store'
import { BackStap } from "../../components/index"

import "./booksDetail.css"



export const BooksDetail = () => {

    const detail = useParams()
    const currentData = detail.booksId

    const { booksDetails, isLoading, error } = useSelector(
        (store: RootState) => store.books
    );

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksDetailAsync(currentData));
    }, [currentData, dispatch]);
    console.log(booksDetails?.title)

    console.log(typeof currentData)

    if (isLoading) {
        return <div>Loading.....</div>
    }

    if (error) {
        return <div>ERROR</div>
    }
    return (
        <div>
            <BackStap />
            <div className='booksDetail_title'>{booksDetails?.title}</div>
            <div className='booksDetail_container'>

                <div className='image_container'>
                    <img alt="image_loading_error" className="booksDetail_image" src={booksDetails?.image} />
                </div>
                <div className='booksDetail_description'>
                    <div className='booksDetails_price'>{booksDetails?.price}</div>
                    <div className='booksDetails_aboutBooks'>
                        <div className='booksDetails_text'>
                            <div>Authors</div>
                            <div>{booksDetails?.authors}</div>
                        </div>
                        <div className='booksDetails_text'>
                            <div>Publisher</div>
                            <div>{booksDetails?.year}</div>
                        </div>
                        <div className='booksDetails_text'>
                            <div>Language</div>
                            <div>English</div>
                        </div>
                        <div className='booksDetails_text'>
                            <div>Format</div>
                            <div>Paper book / ebook (PDF)</div>
                        </div>


                    </div>
                    <div className='more_details'>More details       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        fill="none"
                        viewBox="0 0 10 7"
                    >
                        <path
                            fill="#313037"
                            d="M9.707 1.707A1 1 0 008.293.293l1.414 1.414zM5 5l-.707.707.707.707.707-.707L5 5zM1.707.293A1 1 0 00.293 1.707L1.707.293zm6.586 0l-4 4 1.414 1.414 4-4L8.293.293zm-2.586 4l-4-4L.293 1.707l4 4 1.414-1.414z"
                        ></path>
                    </svg> </div>

                    <button className='booksDetails_button' >ADD TO CART</button>
                    <div className='booksDetail_prevBook'>Preview book</div>
                </div>
            </div>
        </div>

    )
}
