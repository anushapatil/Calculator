import React from 'react'

const buttonStyle = {
  height: '40px',
  background: 'white',
  padding: '10px',
}

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pressedSpecialChar : false,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick (event) {
    if (!this.state.pressedSpecialChar) {
      this.props.getButtonData(event.target.value)
    }
    if (isNaN(event.target.value)) { // pressed on operands
      this.setState({pressedSpecialChar: true})
    } else {
      this.setState({pressedSpecialChar: false})
    }
  }

  render () {
    return (<button style={{width: this.props.width,...buttonStyle}} name={this.props.displayName} value={this.props.displayName} onClick={this.handleOnClick}>{this.props.displayName}</button>);
  }
}

export default Button;