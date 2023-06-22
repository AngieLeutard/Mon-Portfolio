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
                    text={ 'Html - CSS' }
                    outils={ 'Git - Github' }
                />
                <Card
                    picture={ ohmyfood }
                    text={ 'Html - Sass' }
                    outils={ 'Git - Github' }
                />
                <Card
                    picture={ printit }
                    text={ 'Html - CSS - JavaScript' }
                    outils={ 'Git - Github' }
                />
                <Card
                    picture={ sophie }
                    text={ 'Html - CSS - JavaScript' }
                    outils={ 'Git - Github - Swagger' }
                />
                {/* <Card
                    picture={ qwenta }
                    text={ 'Html - CSS' }
                    outils={ 'Git - Github' }
                /> */}
                <Card
                    picture={ kasa }
                    text={ 'Html - CSS - JavaScript - React' }
                    outils={ 'Git - Github' }
                />
                <Card
                    picture={ nina }
                    text={ 'Html - CSS - JavaScript' }
                    outils={ 'Git - Github' }
                />
                <Card
                    picture={ event }
                    text={ 'Html - CSS - JavaScript' }
                    outils={ 'Git - Github' }
                />
                <Card
                    picture={ bank }
                    text={ 'Html - CSS - JavaScript - React - Redux' }
                    outils={ 'Git - Github - Swagger' }
                />
            </section>
        </div>
    )
}

export default SectionProjets