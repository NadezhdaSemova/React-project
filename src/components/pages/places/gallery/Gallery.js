
import GalleryCard from './GalleryCard';
import './gallery.css';


export default function Gallery({
    places,
}) {

    console.log(places)

    return (
        <>
            <div className="create">
                {/* <button [routerLink]="['/add']">Add new place</button> */}
            </div>

            <div className="search-bar">
                <form>
                    <input type="text" placeholder="Search.." name="search" />

                </form>
            </div>

            <section className="gallery">
                <div className="container">
                    <div className="gallery-site">
                        <h1>Gallery</h1>

                        <div className="places">

                            {places.map(place => <GalleryCard key={place._id} place={place} />)}


                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}