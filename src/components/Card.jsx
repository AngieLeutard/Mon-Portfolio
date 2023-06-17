import "../index.scss"

import image from "../assets/cards_pictures/booki.png"
import PropTypes from 'prop-types';

function Card({picture, title}) {
    return (
        <div className="card_wrapper">
            <img src={ image } alt="cardPicture" className="card_picture" />
            {/* <span className='card_title'>{ title }</span> */}
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string
}

export default Card