import React from 'react';
import "./MiniNav.css";

function MiniNav() {
  return (
    <div className="mini-wrapper">
      <div className="mini-nav-wrapper">
        <div className="box box1">
          <div>Jibby</div>
          <div><span style={{ color: 'crimson' }}>by</span> <span style={{ color: 'midnightblue' }}>wit</span></div>
        </div>
        <div className="box box2"></div>
        <div className="box box3">
          <div><i class="fas fa-phone-volume"></i>02-8888888</div>
          <div><i class="fas fa-envelope"></i>jib@jibby.co</div>
          <div><i class="fas fa-clock"></i>Mon-Fri : 8.30 - 17.30</div>
        </div>
      </div>
    </div>
  )
}

export default MiniNav
