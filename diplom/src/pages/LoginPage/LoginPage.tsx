import { Form } from "../../components/index"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/userStore/userStore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigate("/")

            })
            .catch(() => {
                console.log("error")
            })

    }
    return (
        <Form
            title="sign in"
            handleClick={handleLogin}

        />
    )
}
