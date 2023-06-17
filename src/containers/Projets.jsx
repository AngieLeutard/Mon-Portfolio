import "../index.scss"

import Projets from "../projets.json"
import Card from "../components/Card"

function SectionProjets() {
    return (
        <div className='projets_wrapper' id="about">
            <h2 className="projets_title">Mes réalisations</h2>
            <section className="projetsCards_wrapper">
            {/* {Projets.map((projet) => (
            <Card
                key={`${projet.name}`}
                picture={projet.picture}
                title={projet.name}
            />
        ))} */}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    )
}

export default SectionProjets