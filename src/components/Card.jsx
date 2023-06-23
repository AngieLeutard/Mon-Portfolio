import "../index.scss"

import PropTypes from 'prop-types';

function Card({picture, text, outils, description}) {
    return (
        <div className="card_wrapper">
            <img src={ require('../assets/cards_pictures/' + picture) } alt="cardPicture" className="card_picture" />
            <section className="card_description_wrapper">
                <p className="card_details">{ description }</p>
                <div className="card_description">
                    <h3 className="card_title">Langages</h3>
                    <p className="card_text">{ text }</p>
                </div>
                <div className="card_description">
                    <h3 className="card_title">Outils</h3>
                    <p className="card_text">{ outils }</p>
                </div>
            </section>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    text: PropTypes.string,
    outils: PropTypes.string,
    description: PropTypes.string
}

export default Card