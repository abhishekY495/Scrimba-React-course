import MyInfo from "./components/MyInfo";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <MyInfo />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
