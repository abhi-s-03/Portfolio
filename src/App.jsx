import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skill from "./components/skill/Skill.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="body">
          <Hero />
          <div className="content">
            <Skill />            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
