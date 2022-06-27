import geoLocationIcon from "../images/location.svg"

export default function LocationCard(props) {
    return (
        <div className="location-card">
            <div className="location-img">
                <img src={props.item.imageUrl} alt={props.item.title} />
            </div>
            <div className="location-data">
                <div className="geo-location">
                    <img src={geoLocationIcon} alt="geo location" width='18px' />
                    <span className="location">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="google-maps"> View on Google Maps</a>
                </div>
                <div className="location-title">
                    {props.item.title}
                </div>
                <div className="date">
                    {props.item.startDate} - {props.item.endDate}
                </div>
                <div className="location-description">
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}