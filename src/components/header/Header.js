import './header.css';

export default function Header() {
    return (
        <section className="navigation">
            <div className="container">
                <div className="navigation-bar">
                    <div className="logo">
                        <i className="fa-solid fa-earth-europe"></i>
                    </div>
                    <div className="navigation-menu">
                        <ul>
                            <li><a className="nav-button block" href="home">Home</a></li>
                            <li><a className="nav-button block" href="place">Places</a></li>
                            <li><a className="nav-button block" href="login">Login</a></li>
                            <li><a className="nav-button block" href="registration">Registration</a></li>
                            <li><a className="nav-button block" href="logout">Logout</a></li>
                            <li><a className="nav-button block" href="profile">Profile</a></li >
                            <li><a className="nav-button block" href="about">About</a></li >
                            <li><a className="nav-button block" href="contact">Contact</a></li>
                        </ul >
                    </div >
                </div >
            </div >
        </section >
    )
}