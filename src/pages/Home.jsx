import "../index.scss"

import Skills from '../containers/Skills'
import About from '../containers/About'
import Projets from '../containers/Projets'

function Home() {
    return (
      <div className="home_wrapper">
        <section className="accueil_section padding_section"></section>
        <span className="anchor" id="about"></span>
        <section className="about_section padding_section">
          <About/>
        </section>
        <span className="anchor" id="projets"></span>
        <section className="projets_section padding_section">
          <Projets/>
        </section>
        <span className="anchor" id="skills"></span>
        <section className="skills_section padding_section">
          <Skills/>
        </section>
        <span className="anchor" id="contact"></span>
        <section className="contact_section"></section>
      </div>
    );
  }
    
  export default Home