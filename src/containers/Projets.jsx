import "../index.scss"

import Card from "../components/Card"

function Projets() {
    return (
        <div className='projets_wrapper' id="about">
            <h2 className="projets_title">Mes réalisations</h2>
            <section className="projetsCards_wrapper">
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

export default Projets