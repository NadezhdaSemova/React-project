import { Link } from 'react-router-dom'
import './register.css';
import { useState } from 'react';

export default function Register() {

const [registerForm, setRegisterForm] = useState({
    userName: '',

});

console.log(setRegisterForm);

// const setForm = (e) => {
//     setRegisterForm(state => ({...state, [e.target.name]: e.target.value}))
// }

    return (
        <section className="site-registration">
            <div className="container">
                <div className="center">
                    <div className="registration">
                        <input type="checkbox" id="chk" aria-hidden="true" />

                        <div className="signup">
                            <form>
                                <label htmlFor="chk" aria-hidden="true">Registration</label>
                                <input 
                                type="text" 
                                name="txt" 
                                placeholder="User name"
                                // value={userName}
                                // onChange={setForm}
                                />
                                <div className="error">Username is require</div>

                                <input type="email" name="email" placeholder="Email" />
                                {/* <div className="error" >Email is not correct</div> */}

                                <input type="password" name="password" placeholder="Password" />
                                {/* <div className="error">Password must have at least 5 symbols</div> */}

                                <input type="password" name="repeatPassword" placeholder="Repeat password" />
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