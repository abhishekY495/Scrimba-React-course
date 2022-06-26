import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

function App() {
  const card = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        {card}
      </div>
    </div>
  );
}

export default App;
