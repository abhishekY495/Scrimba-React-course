import photoGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero-section">
      <img className="photo-grid" src={photoGrid} alt="grid"></img>
      <div className="hero-text">
        <span className="hero-title">Online Experiences</span>
        <p className="hero-info">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
    )
}