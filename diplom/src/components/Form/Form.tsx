import { useState } from "react"
import { Link } from "react-router-dom";
import "./form.css"

interface IFormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

export const Form = ({ title, handleClick }: IFormProps) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="container">
            <div className="form">
                <div className="form_nav">
                    <Link to={`/login`} className="form_navButton">SIGN IN</Link>
                    <Link to={`/signup`} className="form_navButton">SIGN UP</Link>
                </div>
                <div className="form_container">
                    <div className="form_entryField">
                        <div className="input_description">Email</div>
                        <input className="form_input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                        />
                    </div>
                    <div className="form_entryField">
                        <div className="input_description">Password</div>
                        <input className="form_input"
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder=" Your password"
                        />

                    </div>
                    <button className="form_submit" onClick={() => handleClick(email, pass)}
                    >
                        {title}
                    </button>
                </div>


            </div>
        </div>

    )
}

