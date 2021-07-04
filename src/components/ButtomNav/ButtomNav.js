import React from 'react'
import "./ButtomNav.css"

const year = new Date().getFullYear()


function ButtonNav() {
  return (
    <div className="bottom-nav">
      <div>
        <p>Copyright &copy; {year} Sirawit Mahanin All Rights Reserved</p>
      </div>
    </div >
  );
}

export default ButtonNav
