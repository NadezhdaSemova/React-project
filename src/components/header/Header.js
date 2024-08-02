import './header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';


export default function Header({
    isLogin,
}) {

    

    return (
        <section className="navigation">
            <div className="container">
                <div className="navigation-bar">
                    <div className="logo">
                        <FontAwesomeIcon icon={faEarthAmerica} />
                    </div>
                    <div className="navigation-menu">
                        <ul>

                            <li><NavLink
                                className="nav-button block"
                                style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
                                to="/">
                                Home
                            </NavLink></li>
                            {isLogin && <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/places">Places</NavLink></li>}
                            {!isLogin && <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/login">Login</NavLink></li>}
                            {!isLogin && <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/registration">Registration</NavLink></li>}
                            {isLogin && <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/logout">Logout</NavLink></li>}
                            {isLogin && <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/profile">Profile</NavLink></li >}
                            <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/about">About</NavLink></li >
                            <li><NavLink className="nav-button block" style={({ isActive }) => ({ color: isActive ? "black" : "white" })} to="/contact">Contact</NavLink></li>
                        </ul >
                    </div >
                </div >
            </div >
        </section >
    )
}