import "../index.scss"

import Card from "../components/Card"
import booki from "../assets/cards_pictures/booki.png"
import ohmyfood from "../assets/cards_pictures/ohmyfood.png"
import printit from "../assets/cards_pictures/printit.png"
import sophie from "../assets/cards_pictures/sophie.png"
import qwenta from "../assets/cards_pictures/qwenta.png"
import kasa from "../assets/cards_pictures/kasa.png"
import nina from "../assets/cards_pictures/nina.png"
import event from "../assets/cards_pictures/77.png"
import bank from "../assets/cards_pictures/argent.png" 

function SectionProjets() {
    return (
        <div className='projets_wrapper' id="about">
            <h2 className="projets_title">Mes réalisations</h2>
            <section className="projetsCards_wrapper">
                <Card
                    picture={ booki }
                />
                <Card
                    picture={ ohmyfood }
                />
                <Card
                    picture={ printit }
                />
                <Card
                    picture={ sophie }
                />
                <Card
                    picture={ qwenta }
                />
                <Card
                    picture={ kasa }
                />
                <Card
                    picture={ nina }
                />
                <Card
                    picture={ event }
                />
                <Card
                    picture={ bank }
                />
            </section>
        </div>
    )
}

export default SectionProjets