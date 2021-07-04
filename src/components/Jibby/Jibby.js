import React from 'react'
import "./Jibby.css"
const PUBLIC_URL = process.env.PUBLIC_URL

function JibbyTest() {
  return (
    <div>
      Mollit amet nulla dolor Lorem culpa.Cillum dolor nostrud quis Lorem magna magna.In et id ad consequat elit occaecat ut ad dolor est excepteur laborum.Ullamco veniam duis excepteur ad voluptate nostrud exercitation fugiat ad dolor sint officia adipisicing Lorem.Ullamco amet cillum veniam sunt exercitation fugiat nisi veniam laborum magna.
      Consectetur incididunt culpa ad velit est amet officia eu reprehenderit consectetur ea.Laborum quis pariatur in labore ex elit laborum sint dolore amet ea.Ipsum nostrud sit laborum voluptate nisi proident.Cupidatat aliquip sit reprehenderit duis Lorem veniam qui sit.Dolor proident duis veniam culpa consequat ut qui labore.Ad amet quis adipisicing eu reprehenderit.
    </div>
  )
}

function Jibby(props) {
  return (
    <div className="jibby">
      <div className="jibby-item">
        <img src={PUBLIC_URL + "/bird10.jpg"} />
        <div className="jibby-overlay-text">Jibby</div>
        {/* <img src={PUBLIC_URL + "/bird5.jpg"} /> */}
      </div>
    </div>
  )
}


export default Jibby

