import React from 'react'
import imgReponsiv from "../../assets/responsive.png"

const Header = () => {
  return (
    <section id="slider">
    <div className="conteneur flex-slider">
        <figure id="milieu-haut-gauche">
            <a href="/" target="_blank" rel="noopener noreferrer" >
                <img src={imgReponsiv} alt="plusieurs écrans pour le responsive" title="Responsive design" />
            </a>
            <figcaption>
                <a href="/">Mise en avant du dernier projet</a>
            </figcaption>
        </figure>
        <div id="milieu-haut-droit">
            <h2>Vous êtes à la recherche d'un développeur pour gérer vos projets web ?</h2>
            <p>Je peux renforcer votre équipe autant sur la partie graphique que développement.</p>
            <p>Seriez-vous prêt à me donner ma chance?</p>
        </div>
    </div>
</section>
  )
}

export default Header