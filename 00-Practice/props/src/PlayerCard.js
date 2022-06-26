export default function PlayerCard(props) {
    return (
        <div className="player-card">
            <img className="player-logo" src={props.img} alt="player"/>
            <h3 className="player-name">{props.playerName}</h3>
            <p className="country">Country - <span>{props.country}</span></p>
            <p className="club">Club - <span>{props.club}</span></p>
        </div>
    )
}