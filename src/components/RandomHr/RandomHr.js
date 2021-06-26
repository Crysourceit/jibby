
import React, { useState } from 'react';

function randomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor
}


// Generate new color every clicks!

function RandomHr() {
  const [HrColor, setHrColor] = useState(randomColor())
  return (
    <hr style={{ color: HrColor, borderRadius: '15px', border: '1px solid' }}
      onClick={() => {
        setHrColor(randomColor())
      }}
    />
  )
}

export default RandomHr




