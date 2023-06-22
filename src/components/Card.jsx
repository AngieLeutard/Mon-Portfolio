import "../index.scss"

import PropTypes from 'prop-types';

function Card({picture, title}) {
    return (
        <div className="card_wrapper">
            <img src={ picture } alt="cardPicture" className="card_picture" />
            <p className="card_text">Langages & Outils</p>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string
}

export default Card