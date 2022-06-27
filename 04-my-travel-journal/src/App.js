import Navbar from "./components/Navbar";
import LocationCard from "./components/LocationCard";
import "./style.css"
import data from "./data"

function App() {
  const location = data.map(item => {
    return (
      <LocationCard
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="locations">
        {location}
      </div>
    </div>
  );
}

export default App;
