import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

import "./search.css"

export const Search = () => {

    const navigate = useNavigate()

    const [params] = useSearchParams()


    const [searchValue, setSearchValue] = useState(params.get("value") || "")

    const onSearch = (e: any) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        navigate(`books/search/?value=${searchValue}`)
    }



    return (
        <form className='search' onSubmit={handleSubmit}>
            <input className='search_input' placeholder='Search' onChange={onSearch} value={searchValue} />
            <button className='search_button'>    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
            >
                <path
                    fill="#313037"
                    fillRule="evenodd"
                    d="M2 8.5C2 4.92 4.92 2 8.5 2S15 4.92 15 8.5c0 1.79-.73 3.42-1.91 4.59A6.453 6.453 0 018.5 15C4.92 15 2 12.08 2 8.5zm17.71 9.79l-4.53-4.53A8.49 8.49 0 0017 8.5C17 3.81 13.19 0 8.5 0 3.81 0 0 3.81 0 8.5 0 13.19 3.81 17 8.5 17c1.98 0 3.81-.68 5.26-1.82l4.53 4.53c.2.19.45.29.71.29.26 0 .51-.1.71-.29.39-.39.39-1.03 0-1.42z"
                    clipRule="evenodd"
                ></path>
            </svg></button>
        </form>
    )
}
