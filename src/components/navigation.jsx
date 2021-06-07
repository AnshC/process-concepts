import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

export default function Navigation(){
    useEffect(()=>{
        const burger = document.querySelector('.burger')
        const nav = document.querySelector('.links')
        const navbar = document.querySelector('.navigation')
        const navlink = document.querySelectorAll('.link')
        burger.addEventListener('click',()=>{
           nav.classList.toggle('nav-active')
           navbar.classList.toggle('nav-top-active')
        })
        navlink.forEach((link)=>{
            link.addEventListener('click',()=>{
                nav.classList.toggle('nav-active')
                navbar.classList.toggle('nav-top-active')
            })
        })
        
    })
    return(
        <div className="navigation">
            <h1 id="brand">Process &#38; Concepts</h1>
            <ul className="links">
                <li className="link"><Link to="/" className="ReactLink">Home</Link></li>
                <li className="link"><Link to="/about" className="ReactLink">About</Link></li>
                <li className="link"><Link to="/gallery" className="ReactLink">Gallery</Link></li>
                <li className="link">
                    <a href="https://github.com/AnshC/theme-jsx" className="ReactLink" id="special">
                        <FontAwesomeIcon icon={faShoppingCart} /> Shop
                    </a>
                </li>
            </ul>
            <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}