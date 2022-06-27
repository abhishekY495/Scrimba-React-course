import React from "react";
import "./style.css";

function App() {
  const [count, setCount] = React.useState(0);
  function minus() {
    if (count===0) return;
    setCount(prevCount => prevCount-1);
  }
  function plus() {
    setCount(prevCount => prevCount+1);
  }

  // 
  const [play, setPlay] = React.useState(true);
  function change() {
    setPlay(prevPlay => !prevPlay);
  }

  return (
    <>
    <div className="counter">
      <button className="counter-minus" onClick={minus} >–</button>
      <div className="counter-count">
        <h1>{count}</h1>
      </div>
      <button className="counter-plus" onClick={plus} >+</button>
    </div>
  
    <br/><br/><br/><hr/><br/>

    <div className="state">
      <h2>Wanna play football</h2>
      <div className="state-value" onClick={change} >
        {play ? 'Yes':'No'}
      </div>
    </div>
    </>
  );
}

export default App;
