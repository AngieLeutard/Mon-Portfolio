import "../index.scss"

import image from "../assets/cards_pictures/booki.png"

function Card() {
    return (
        <div className="card_wrapper">
            <img src={image} alt="cardPicture" className="card_picture" />
        </div>
    )
}

export default Card