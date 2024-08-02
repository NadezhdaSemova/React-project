import { Link, useNavigate } from 'react-router-dom'
import './register.css';
import { useState } from 'react';
import { registerSubmit } from '../../../../service/userService';

export default function Register({
    setLogin,
}) {

    const navigate = useNavigate()

    const [registerForm, setRegisterForm] = useState({
        user: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [auth, setAuth] = useState({});

    const setForm = (e) => {
        setRegisterForm(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const submitForm = async (e) => {
        e.preventDefault();

        const result = await registerSubmit(registerForm);
        setAuth(result);
        localStorage.setItem('id', result._id);
        localStorage.setItem('token', result.token);
        localStorage.setItem('email', result.email);
        setLogin();
        navigate('/');
    }

    return (
        <section className="site-registration">
            <div className="container">
                <div className="center">
                    <div className="registration">
                        <input type="checkbox" id="chk" aria-hidden="true" />

                        <div className="signup">
                            <form method='POST' onSubmit={(e) => submitForm(e)}>
                                <label htmlFor="chk" aria-hidden="true">Registration</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={registerForm.user}
                                    onChange={(e) => setForm(e)}
                                />
                                {/* <div className="error">Username is require</div> */}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={registerForm.email}
                                    onChange={(e) => setForm(e)}
                                />

                                {/* <div className="error" >Email is not correct</div> */}

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={registerForm.password}
                                    onChange={(e) => setForm(e)} />
                                {/* <div className="error">Password must have at least 5 symbols</div> */}

                                <input
                                    type="password"
                                    name="repeatPassword"
                                    placeholder="Repeat password"
                                    value={registerForm.repeatPassword}
                                    onChange={(e) => setForm(e)}
                                />
                                {/* <div className="error" >Password mismatch</div> */}
                                <button>Sign up</button>

                                <div className="already-user">Already a user <Link to="/login">Login</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}