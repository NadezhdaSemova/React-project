import { Link} from 'react-router-dom';
import './gallery.css';


export default function GalleryCard({
    place
}) {

   
    return (
        <>
            <div key={place._id} className="card">
                <h3>
                    {place.place}
                </h3>
                <img src={place.imgUrl} alt="imagePlace" />
                <Link to={`/places/${place._id}`}><i className="fa-solid fa-book-open-reader"></i> Read More</Link>
            </div>
        </>
    )
}