
import React from 'react';
import "./Jjampong.css";
import MyCards from './MyCards/MyCards';

function Jjampong() {
  return (
    <div className="jjampong">
      <div className="jjampong-text">
        <h1 className="jjampong-headlines">SERVICES</h1>
        <h2 className="jjampong-subheadlines">Jibby is the leading parcel delivery company in Thailand.</h2>
      </div>
      <div className="jjampong-wrapper">
        <div className="jjampong-box">
          <MyCards svg={"box.svg"} h={100} w={100} headline={"Jibby SameDay"} content={"Jib your parcel the same day!"} />
        </div>
        <div className="jjampong-box">
          <MyCards svg={"easyjib.svg"} h={100} w={100} headline={"EasyJib"} content={"All-in-one platform for your jibment."} />
        </div>
        <div className="jjampong-box">
          <MyCards svg={"cod.svg"} h={100} w={100} headline={"COD"} content={"Chirp on delivery!"} />
        </div>
        <div className="jjampong-box">
          <MyCards svg={"pickup.svg"} h={100} w={100} headline={"Jibby Pickup"} content={"Pickup your parcel on the fly."} />
        </div>
        <div className="jjampong-box">
          <MyCards svg={"calculator.svg"} h={100} w={100} headline={"Jibby Calculator"} content={"Calculate your jibment cost within chirps."} />
        </div>
        <div className="jjampong-box">
          <MyCards svg={"care.svg"} h={100} w={100} headline={"Jibby Care"} content={"THB100,000 parcel insurance."} />
        </div>
      </div>
    </div>
  )
}

export default Jjampong

