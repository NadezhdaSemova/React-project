
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faLocation} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

export default function HomeTopPlaces({
    place,
}) {

    return (

        <div className="card">
            <img src={place.imgUrl} alt="Place" />
            <div className="info">
                <FontAwesomeIcon icon={faLocation} />
                <p>{place.place}</p>
            </div>

            <div className="info">
            <FontAwesomeIcon icon={faThumbsUp} />
                <p>{place.likes}</p>
            </div>
            <Link to='/about'>Read about place</Link>
        </div>

    )
}