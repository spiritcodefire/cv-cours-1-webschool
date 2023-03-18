import React from 'react'

const CardQuadrio = (props) => {
  return (
    <figure>
        <h4>{props.title}</h4>
        <img src={props.img} alt={props.alt} />
        <figcaption>{props.subtitle}</figcaption>
    </figure>
  )
}

export default CardQuadrio