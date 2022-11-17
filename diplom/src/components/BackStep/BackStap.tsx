import { useNavigate } from "react-router-dom"

export const BackStap = () => {

    const navigate = useNavigate()

    return (
        <div style={{ cursor: 'pointer', width: '50px' }} onClick={() => navigate(-1)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="24"
                fill="none"
                viewBox="0 0 46 24"
            >
                <path fill="#fff" d="M0 0H24V24H0z"></path>
                <path
                    fill="#313037"
                    fillRule="evenodd"
                    d="M11.001 5.999c0 .26-.1.51-.29.71l-4.3 4.29h37.59c.55 0 1 .45 1 1s-.45 1-1 1H6.411l4.3 4.29c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0l-6-6a.988.988 0 01-.21-.32c-.02-.05-.04-.09-.04-.14a.852.852 0 010-.5c0-.05.02-.09.04-.14.05-.12.12-.23.21-.32l6-6c.39-.39 1.03-.39 1.42 0 .19.2.29.45.29.71z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    )
}
