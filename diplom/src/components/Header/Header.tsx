import { Search } from "../Search/Search"
import { Link } from "react-router-dom"
import "./header.css"
import { LogOut } from "../index"

export const Header = () => {

  const imageLogo = require('../../assets/images/BookStore.png')
  return (
    <div className='header'>
      <Link to={`/`}><img className='header_logo' src={imageLogo} alt="logo" /></Link>
      <Search />
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
        <LogOut />
      </div>
    </div>
  )
}
