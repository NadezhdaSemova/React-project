import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="items">
                    <div className="logo">
                    <FontAwesomeIcon icon={faEarthEurope} />
                    </div>

                    <div className="logos">
                        
                    <i><FontAwesomeIcon icon={faInstagram} className='social-logos'/></i>
                    <i><FontAwesomeIcon icon={faFacebook} className='social-logos'/></i>
                    <i><FontAwesomeIcon icon={faYoutube} className='social-logos'/></i>
                    </div>

                </div>
            </div>
        </section>
    )
}