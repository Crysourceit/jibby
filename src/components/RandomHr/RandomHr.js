
import React, { useState } from 'react';

function randomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor
}


// Generate new color every clicks!

function RandomHr(props) {
  const [HrColor, setHrColor] = useState(randomColor())
  return (
    <hr style={{ color: HrColor, borderRadius: '15px', border: '3px solid', width: props.width }}
      onClick={() => {
        setHrColor(randomColor())
      }}
    />
  )
}

export default RandomHr




