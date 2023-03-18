import React from 'react'
import profil from "../../assets/profil.png"
import design from "../../assets/design.png"
import integration from "../../assets/integration.png"
import dev from "../../assets/dev.png"
import seo from "../../assets/seo.png"
import CardQuadrio from "./CardQuadrio"

// const CardQuadrio = (props) => {
//   return(
//     <figure>
//         <h4>{props.title}</h4>
//         <img src={props.img} alt={props.alt} />
//         <figcaption>{props.subtitle}</figcaption>
//     </figure>
//   )
// }

const SectionPresentation = () => {
  return (
    
    <section id="presentation">
        <h2>Présentation</h2>

        <div className="profil-flex">
            <img src={profil} title="Photo de Prénom Nom" alt="Prénom Nom" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?  Quam totam corporis doloremque doloribus fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero et ratione deleniti ipsa veritatis.</p>
        </div>
        
        <div className="mise-en-avant">

            <CardQuadrio
                title="Design"
                img={design}
                alt="Design"
                subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <CardQuadrio
                title="Front-end development"
                img={integration}
                alt="Design"
                subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <CardQuadrio
                title="Back-end development"
                img={dev}
                alt="Design"
                subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <CardQuadrio
                title="SEO"
                img={seo}
                alt="Design"
                subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />

        </div>
    </section>
  )
}

export default SectionPresentation