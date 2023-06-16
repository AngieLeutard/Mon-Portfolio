import { Link } from 'react-router-dom'; 

import logoAL from '../assets/logoAngie/AngieLeutard.png';
import fleur from '../assets/fleurs/fleur.png';
import fleur2 from '../assets/fleurs/fleur2.png';
import fleur3 from '../assets/fleurs/flower3.png';
import fleur4 from '../assets/fleurs/fleur4.png';
import star from '../assets/fleurs/star.png';
import star2 from '../assets/fleurs/star2.png';


function Header() {
    return (
        <div className='header_wrapper'>
            <img className='flower flower1' alt="flower icon" src={ fleur } />
            <img className='flower flower2' alt="flower icon" src={ fleur2 } />
            <img className='flower flower3' alt="flower icon" src={ fleur3 } />
            <img className='flower flower4' alt="flower icon" src={ fleur4 } />
            <Link className='headerLogo_wrapper' to="/">
                <img className='header_logo' src={ logoAL } alt="logo" />
            </Link>
            <section className='nav_wrapper'>
                <nav>
                    <img src={ star } alt="star" className='star star1' />
                    <img src={ star2 } alt="star" className='star star2' />
                    <a className='nav_link' href="#about">
                        À propos
                    </a>
                    <a className='nav_link' href='#projets'>
                        Projets
                    </a>
                    <a className='nav_link' href="#skills">
                        Compétences
                    </a>
                    <a className='nav_link' href='#contact'>
                        Contact
                    </a>
                </nav>
            </section>
        </div>
    )
}

export default Header