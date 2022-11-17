import { useAuth } from "../../hooks/use-auth"
import { removeUser } from '../../store/userStore/userStore'
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import "./logOut.css"




export const LogOut = () => {
    const { isAuth } = useAuth()
    const dispatch: AppDispatch = useDispatch();

    console.log(isAuth)

    return isAuth ? (
        <button className="button_logOut"
            onClick={() => dispatch(removeUser())}>

            LogOut
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="92"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 92 92"
                xmlSpace="preserve"
            >
                <path d="M60 60.7V79c0 2.2-1.6 4-3.8 4H4c-2.2 0-4-1.8-4-4V13c0-2.2 1.8-4 4-4h52.2c2.2 0 3.8 1.8 3.8 4v18.3c0 2.2-1.8 4-4 4s-4-1.8-4-4V17H8v58h44V60.7c0-2.2 1.8-4 4-4s4 1.8 4 4zM90.8 43L75.2 27.2c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l8.9 9-48.5.1c-2.2 0-4 1.8-4 4s1.8 4 4 4l48.5-.1-8.9 9c-1.6 1.6-1.5 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2l15.7-15.8c1.6-1.7 1.6-4.2 0-5.8z"></path>
            </svg> */}
        </button>
    ) : (null)

}
