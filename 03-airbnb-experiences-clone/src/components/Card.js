import starLogo from "../images/star.png"

export default function Card(props) {
    let badgeText = '';
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.item.location === "Online") {
        badgeText = 'Online';
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-picture" src={props.item.coverImg} alt='experience-pic' />
            <div className="rating">
                <img src={starLogo} alt='star' />
                <span>{props.item.stats.rating}</span>
                <div className="country">
                    <span>({props.item.stats.reviewCount}) • </span>
                    <span>{props.item.location}</span>
                </div>
            </div>
            <div className="card-details">
                <span>{props.item.title}</span>
            </div>
            <div className="price">
                <span>From ${props.item.price}</span> / person
            </div>
        </div>
    )
}