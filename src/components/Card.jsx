import "../index.scss"

import PropTypes from 'prop-types';

function Card({picture, text, outils}) {
    return (
        <div className="card_wrapper">
            <img src={ picture } alt="cardPicture" className="card_picture" />
            <section className="card_description">
                <h3 className="card_title">Langages</h3>
                <p className="card_text">{ text }</p>
                <h3 className="card_title">Outils</h3>
                <p className="card_text">{ outils }</p>
            </section>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string
}

export default Card