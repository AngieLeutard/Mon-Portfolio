import "../index.scss"
import aboutPicture from '../assets/moi.png';

function Skills() {
    return (
        <div className='about_wrapper'>
            <h2 className="about_title">Qui suis-je ?</h2>
            <section className="aboutDetails_wrapper">
                <img src={ aboutPicture } alt="aboutPicture" className="about_picture" />
                <p className="about_description">Langages et outils que j'utilise.</p>
            </section>
        </div>
    )
}

export default Skills