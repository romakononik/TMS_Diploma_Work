import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";


export function useAuth() {
    const { email, token, id } = useSelector((store: RootState) => store.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,

    }

}