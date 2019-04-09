import React from 'react'

const LabelStyle = {
  height: '20%',
  width: '100%',
  display: 'flex',
}

function Label(props) {
  return (
    <div  style={LabelStyle}>
      <label value={props.updateLabelData}> 
        {props.updateLabelData} 
      </label>
    </div>
  );
}

export default Label; 