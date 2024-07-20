import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skill from "./components/skill/Skill.jsx";
import Edu from "./components/education/Edu.jsx";
import Exp from "./components/exp/Exp.jsx";
import Project from "./components/project/Project.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main className="body">
        <Hero />
        <section className="content">
          <Skill />
          <Edu />
          <Exp />
        </section>
        <section className="content">
          <Project />
          <Contact />
        </section>
        <footer className="content">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
