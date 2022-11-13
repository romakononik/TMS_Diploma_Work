import { Form } from "../../components/Form/Form"
import { setUser } from "../../store/userStore/userStore"
import { useDispatch } from "react-redux"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

// сделать useNavigate после аворизации направление на главную страницу

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
            })
            .catch()

    }

    return (
        <div>
            <Form
                title="register"
                handleClick={handleRegister}
            />

            <Link to={`/login`}><button></button></Link>


        </div>
    )
}
