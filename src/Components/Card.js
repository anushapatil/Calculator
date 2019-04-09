import React from 'react'

const cardStyle = {
  height: '300px',
  width: '250px',
  flex: 1,
  alineItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}

function Card(props) {
  return (
    <div style={cardStyle}>{props.children}</div>
  );
}

export default Card; 