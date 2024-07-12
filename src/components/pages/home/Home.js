import { useEffect, useState } from 'react';
import './home.css';
import { getAll } from '../../../service/homeService';
import HomeTopPlaces from './HomeTopPlaces';

export default function Home() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getAll().then(place => {
            setPlaces(Object.values(place));
        })
            .catch(err => {
                console.log(err)
            })
    }, [])

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