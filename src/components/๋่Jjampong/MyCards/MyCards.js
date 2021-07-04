import React from 'react'
import "./MyCards.css"
const PUBLIC_URL = process.env.PUBLIC_URL;

function MyCards(props) {
  return (
    <div className="service-cards">
      <div className="service-cards-icon">
        {/* {props.fa && <i class={props.fa}></i>} */}
        {props.svg && <object style={{ height: props.h, width: props.w }} type="image/svg+xml" data={PUBLIC_URL + "/svg/" + props.svg}>svg-animation</object>}
        {/* {props.svg && <img width='100px' height='100px' src={PUBLIC_URL + "/svg/" + props.svg} />} */}
      </div>
      <div className="service-cards-contents">
        <h2 className="service-cards-headlines">{props.headline}</h2>
        <p>{props.content}</p>
        <p>More info . . <i class="fas fa-drumstick-bite"></i></p>
      </div>
    </div>
  )
}
export default MyCards
