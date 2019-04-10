import React from 'react'

const buttonStyle = {
  height: '40px',
  background: 'white',
  padding: '10px',
}

let pressedSpecialChar = false
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick (event) {
    if (!pressedSpecialChar) {
      this.props.getButtonData(event.target.value, this.props.isOperand)
    }
    if (this.props.isOperand) { // pressed on operands
      pressedSpecialChar = true
    } else {
      pressedSpecialChar = false
    }
  }

  render () {
    return (<button style={{width: this.props.width,...buttonStyle}} name={this.props.displayName} value={this.props.displayName} onClick={this.handleOnClick}>{this.props.displayName}</button>);
  }
}

export default Button;