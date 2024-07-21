
import './home.css';

import HomeTopPlaces from './HomeTopPlaces';

export default function Home({
    places,
}) {

    
    const treePlaces = places.sort((a, b) => b.likes - a.likes).slice(0, 3);
    console.log(treePlaces);
    

    return (
        <section className="slides">
            <div className="container">
                <div className="slide-bar">

                    <h2>Top 3 places</h2>
                    <div className="top-places">
                        {treePlaces.map(place => <HomeTopPlaces key={place._id} place={place} />)}
                    </div>
                </div>
            </div>
        </section >
    )
}