import { useEffect, useState } from "react";

const url = 'http://localhost:3030/api/places';

export const getAll = async () => {
    const response = await fetch(url);
    const result = await response.json();

    return result;
};

export const Places = () =>{
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getAll().then(place => {
            setPlaces(Object.values(place));
        })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return places;
}

export  const GetOnePlace = (id) => {
    const [currentPlace, setCurrentPlace] = useState({})
    useEffect(() => {
        getAll().then(places => {
            setCurrentPlace( places.filter((p) => p._id === id)[0]);
        })
    })
    return currentPlace;
}