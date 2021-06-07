import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Promo from './subcomponents/promo'

export default function Home() {
    useEffect(() => {
        /* Parallax Animation */
        if(window.innerWidth > 1000){
            document.addEventListener('mousemove', parallax);
        function parallax(e) {
            this.querySelectorAll('.parallax').forEach((layer) => {
                const speed = layer.getAttribute('data-speed');
                const x = ((window.innerWidth - e.pageX * speed) / 75);
                const y = ((window.innerHeight - e.pageY * speed) / 75);
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            })
        }
        }
        /* Card Animation */
        const cards = document.getElementsByClassName('cards');
        for (var i = 0; i < cards.length; i++) {
            cards[i].querySelectorAll('.card').forEach((card) => {
                card.addEventListener('mouseover', () => {

                    const border = card.childNodes[0];
                    border.style.transform = 'translateX(-10px) translateY(10px)'
                })
                card.addEventListener('mouseout', () => {
                    const border = card.childNodes[0];
                    border.style.transform = 'translateX(-20px) translateY(20px)'
                })
            })
        }
    })
    return (
        <div className="home">
            <div className="hero">
                <div className="content">
                    <h1 className="head">
                        Process<p>&#38;Concepts</p>
                    </h1>
                    <p className="info">
                        It's all about process and concept.
                    </p>
                </div>
                <div className="container">
                    <img src="/img/hero.jpg" alt="Mehrangarh Fort" className="parallax" data-speed="1" />
                    <div className="box parallax" data-speed="5"></div>
                    <div className="box-2 parallax" data-speed="-3"></div>
                </div>
            </div>
            <section className="promo-section">
            <Promo />
            </section>
            <section className="work">
                <h1 className="head">Thinking Out of The <span>Box.</span></h1>
                <div className="box">
                    <div className="row cards">
                        <div className="card">
                            <div className="card-box"></div>
                            <div className="img" style={{ backgroundImage: 'url(/img/works/sketches.jpg)' }}>
                                <div className="text">Sketches</div>
                            </div>
                        </div>
                        <Link to="/gallery/painting" className="card ReactLink">
                            <div className="card-box"></div>
                            <div className="img" style={{ backgroundImage: 'url(/img/works/painting.jpg)' }}>
                                <div className="text">Paintings</div>
                            </div>
                        </Link>
                        <Link to="/gallery/installation" className="card ReactLink">
                            <div className="card-box"></div>
                            <div className="img" style={{ backgroundImage: 'url(/img/works/installations.jpg)', backgroundPosition: 'left' }}>
                                <div className="text">Installations</div>
                            </div>
                        </Link>
                        <div className="card">
                            <div className="card-box"></div>
                            <div className="img" style={{ backgroundImage: 'url(/img/works/embroidery.jpg)' }}>
                                <div className="text">Textiles</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-box"></div>
                            <div className="img" style={{ backgroundImage: 'url(/img/works/ceramics.jpg)' }}>
                                <div className="text">Ceramics</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-box"></div>
                            <div className="img" style={{ backgroundImage: 'url(/img/works/sculptures.jpg)', backgroundPosition: 'left' }}>
                                <div className="text">Sculptures</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <h1 className="head">Who I Am.</h1>
                <h2 className="subhead">Meghna Shah Vaidya</h2>
                <div className="content">
                    <div className="image">
                        <img src="/img/meghna/profile.jpg" alt="Meghna Shah Vaidya" />
                        <div className="box"></div>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perspiciatis nesciunt, tempore soluta recusandae quis ab exercitationem tenetur nemo fuga quibusdam? Iste tempore aspernatur est ullam qui, maxime nemo facilis!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perspiciatis nesciunt, tempore soluta recusandae quis ab exercitationem tenetur nemo fuga quibusdam? Iste tempore aspernatur est ullam qui, maxime nemo facilis!</p>
                        <p style={{paddingBottom: '20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perspiciatis nesciunt, tempore soluta recusandae quis ab exercitationem tenetur nemo fuga quibusdam? Iste tempore aspernatur est ullam qui, maxime nemo facilis!</p>
                        <Link to="/about" className="ReactLink link">Read More</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}