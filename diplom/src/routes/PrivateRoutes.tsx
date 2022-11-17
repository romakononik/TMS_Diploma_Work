import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { LOGIN } from "../constants/routes"

type Props = {
    children: JSX.Element
}

export const PrivateRoute = ({ children }: Props) => {

    const { isAuth, email } = useAuth()


    if (!isAuth) {
        // redirect
        return <Navigate to={LOGIN} />;
    }

    return children;
};