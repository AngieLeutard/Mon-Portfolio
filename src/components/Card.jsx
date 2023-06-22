import "../index.scss"

import PropTypes from 'prop-types';

function Card({picture, title}) {
    return (
        <div className="card_wrapper">
            <img src={ picture } alt="cardPicture" className="card_picture" />
            <h3 className="card_title">Langages & Outils</h3>
            <section className="card_description">
                
            </section>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string
}

export default Card