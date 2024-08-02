import { useState } from 'react';
import './login.css';
import {Link, useNavigate} from 'react-router-dom'
import { loginSubmit } from '../../../../service/userService';


export default function Login({
    setLogin,
}) {
    const navigate = useNavigate();

    const [value, setValue] = useState({
        email: "",
        password: "",
    });
    const [auth, setAuth] = useState({});

    const changeHandler = (e) => {
        setValue(state => ({...state, [e.target.name]: e.target.value}));
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const result = await loginSubmit(value);
        setAuth(result);
        localStorage.setItem('id', result._id);
        localStorage.setItem('token', result.token);
        localStorage.setItem('email', result.email);
        setLogin();
        navigate("/");
    }

    return (
        <section className="site-login">
            <div className="container">
                <div className="center">
                    <div className="container-login">
                        <input type="checkbox" id="chk" aria-hidden="true" />

                        <div className="signup">
                            <form method="POST" onSubmit={(e) => handlerSubmit(e)} >
                                <label htmlFor="chk" aria-hidden="true">Login</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={value.email}
                                    onChange={(e) => changeHandler(e)}
                                />


                                <div className="error">Should write correct email</div>

                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={value.password}
                                    onChange={(e) => changeHandler(e)}
                                />
                                <div className="error">Should write password!</div>

                                <button type="submit">Login</button>
                                <div className="not-a-member">Not a member <Link to="/register">Register</Link></div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}

