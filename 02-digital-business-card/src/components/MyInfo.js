import profilePic from "../images/profile-pic.png";

export default function MyInfo() {
    return (
        <div className="info">
            <img src={profilePic} className="profile-pic" alt="Me at a beach chilling."/>
            <h2 className="name">Abhishek</h2>
            <p className="role">Frontend Developer</p>
            <a href="https://abhisheky495.netlify.app" className="website">My Website</a>
        </div>
    )
}
