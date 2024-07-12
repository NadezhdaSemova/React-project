

export default function HomeTopPlaces({
    place,
}) {

    return (
       
            <div className="card">
                <img src={place.imgUrl} alt="Place picture"/>
                <div className="info">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{place.place}</p>
                </div>

                <div className="info">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <p>{place.likes}</p>
                </div>
                <a href='about'>Read about place</a>
            </div>
        
    )
}