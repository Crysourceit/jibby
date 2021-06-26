import React, { useState } from 'react';
import "./Jumbotron.css";
import frameBg from "./black-thread-light.png"
import { log } from 'async';
import RandomHr from '../RandomHr/RandomHr';

const PUBLIC_URL = process.env.PUBLIC_URL







function Jumbotron() {

  const [isHrClicked, setHr] = useState(true);

  return (

    <div className="container">
      <div className="frame" style={{ backgroundImage: "url(" + frameBg + ")" }}>
        <div className="big-logo">
          <h1>Saleng.th</h1>

          <img src={PUBLIC_URL + "/saleng.png"} />
        </div>
        <div className="motto">
          <div className="motto-item">
            <h3>Speed <i class="fas fa-bolt motto-icons" style={{ color: '#' }}></i></h3>
            <p>Same-month delivery.</p>
          </div>
          <div className="motto-item">
            <h3>Safe <i class="fas fa-lock motto-icons"></i></h3>
            <p>THB100 guaranteed insurance.</p>
          </div>
          <div className="motto-item">
            <h3>Sound <i class="fas fa-egg motto-icons"></i></h3>
            <p>Soft throwing.</p>
          </div>
        </div>

        {/* Recap how to use state */}
        <hr className={isHrClicked ? "hr-line" : "hr-line-clicked"}
          onClick={() => {
            setHr(prevState => {
              return !prevState
            })
          }}
        ></hr>
        <p>Morbi ut efficitur leo, ac cursus nibh. Nam laoreet vitae neque ut maximus. Sed fringilla ut tortor eget pulvinar. Morbi sollicitudin pellentesque neque cursus malesuada. Cras quis neque molestie quam ultrices viverra vel nec lectus. Vestibulum ultricies urna congue purus fringilla, nec sollicitudin lorem pulvinar. Curabitur malesuada est sit amet congue convallis. Phasellus sodales dapibus purus tempor feugiat.</p>
      </div>
    </div>
  )
}

export default Jumbotron

