import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                    <div className="head" style={{alignSelf: 'flex-start'}}>Process &#38; Concepts</div>
                    <div className="subhead">By Meghna Shah Vaidya</div>
                </div>
                <div className="col">
                    <div className="head">Social</div>
                    <ul className="icons">
                        <a href="https://instagram.com/process_concepts" className="icon">
                            <FontAwesomeIcon icon={faInstagram}  />
                        </a>
                        <a href="https://www.facebook.com/processandconcepts/" className="icon">
                            <FontAwesomeIcon icon={faFacebook}  />
                        </a>
                        <a href="mailto:meghnabitsy@gmail.com" className="icon">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                    </ul>
                </div>
                <div className="col">
                    <div className="head">Explore</div>
                    <ul className="links">
                        <Link className="ReactLink" to="/">Home</Link>
                        <Link className="ReactLink" to="/gallery">Gallery</Link>
                        <Link className="ReactLink" to="/about">About</Link>
                        <Link className="ReactLink" to="/shop">Shop</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}