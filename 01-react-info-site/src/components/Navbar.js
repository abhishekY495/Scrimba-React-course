import reactLogo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={reactLogo} alt="React Logo" width='60px' />
                <h2>ReactFacts</h2>
            </div>
            <div>
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}