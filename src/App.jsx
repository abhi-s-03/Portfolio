import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skill from "./components/skill/Skill.jsx";
import Edu from "./components/education/Edu.jsx";
import Exp from "./components/exp/Exp.jsx";
import Project from "./components/project/Project.jsx";
import Certifications from "./components/certifications/Certifications.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="body">
        <Hero />
        <section className="content">
          <Skill />
          <Exp />
        </section>
        <section className="content">
          <Project />
        </section>
        <section className="content">
          <Certifications />
          <Edu />
        </section>
        <section className="content">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
