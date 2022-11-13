import { Search } from "../Search/Search"
import { Link } from "react-router-dom"
import "./header.css"

export const Header = () => {
  const imageLogo = require('../images/BookStore.png')
  return (
    <div className='header'>
      <Link to={`/`}><img className='header_logo' src={imageLogo} alt="logo" /></Link>
      <Search />
      {/* <div className='input_form'>
        <input className='search_input' type="text" placeholder='Search'/>
        <svg className='svg'
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
        </svg>
      </div> */}
      <div className='header_nav'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="none"
          viewBox="0 0 56 56"
        >
          <path
            stroke="#313037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.1 19L19 35.393c0 .426.16.835.444 1.136.285.302.67.471 1.073.471h14.966c.403 0 .788-.17 1.073-.47.284-.302.444-.71.444-1.137L34.9 19H21.1z"
          ></path>
          <path
            stroke="#313037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M31 25c0 .53-.316 1.04-.879 1.414C29.56 26.79 28.796 27 28 27s-1.559-.21-2.121-.586C25.316 26.04 25 25.53 25 25"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="none"
          viewBox="0 0 56 56"
        >
          <path
            stroke="#313037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M36 37v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2M28 27a4 4 0 100-8 4 4 0 000 8z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="none"
          viewBox="0 0 56 56"
        >
          <path
            stroke="#313037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M35.612 21.415a4.731 4.731 0 00-1.537-1.047 4.659 4.659 0 00-3.626 0 4.732 4.732 0 00-1.536 1.047l-.913.93-.913-.93A4.693 4.693 0 0023.737 20a4.693 4.693 0 00-3.35 1.415A4.875 4.875 0 0019 24.828c0 1.28.5 2.509 1.387 3.414l.913.93L28 36l6.7-6.828.912-.93c.44-.448.79-.98 1.027-1.566a4.908 4.908 0 000-3.695 4.833 4.833 0 00-1.027-1.567v0z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
