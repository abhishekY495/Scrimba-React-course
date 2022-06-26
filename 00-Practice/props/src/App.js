import "./style.css"
import PlayerCard from "./PlayerCard";
import messi from "./images/messi.jpg";
import neymar from "./images/neymar.jpg";
import ronaldo from "./images/ronaldo.jpg";
import mbappe from "./images/mbappe.jpg";
import deBruyne from "./images/de-bruyne.jpg"
import lewandowski from "./images/lewandowski.jpg"
import moSalah from "./images/mo-salah.jpg"
import ramos from "./images/ramos.jpg"


function App() {
  return (
    <div className="players">
      <PlayerCard 
        img={messi}
        playerName="Messi"
        country="Argentina"
        club="Barcelona"
      />
      <PlayerCard 
        img={neymar}
        playerName="Neymar"
        country="Brazil"
        club="PSG"
      />
      <PlayerCard 
        img={ronaldo}
        playerName="Ronaldo"
        country="Portugal"
        club="Manchester United"
      />
      <PlayerCard 
        img={mbappe}
        playerName="Mbappe"
        country="France"
        club="PSG"
      />
      <PlayerCard 
        img={deBruyne}
        playerName="De Bruyne"
        country="Belgium"
        club="Manchester City"
      />
      <PlayerCard 
        img={lewandowski}
        playerName="Lewandowski"
        country="Poland"
        club="Bayern Munich"
      />
      <PlayerCard 
        img={moSalah}
        playerName="Salah"
        country="Egypt"
        club="Liverpool"
      />
      <PlayerCard 
        img={ramos}
        playerName="Ramos"
        country="Spain"
        club="Real Madrid"
      />
    </div>
  );
}

export default App;
