import trollFace from "../images/troll-face.png"

export default function Navbar() {
    return (
        <nav>
            <div className="nav-bar">
                <img src={trollFace} alt="troll face" className="nav-image" />
                <span className="nav-title">Meme Generator</span>
            </div>
            <span className="nav-sub-title">React Project - 5</span>
        </nav>
    )
}