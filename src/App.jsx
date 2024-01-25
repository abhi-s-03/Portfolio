import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="body">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
