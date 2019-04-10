import React, { Component } from 'react'
import Card from './Components/Card'
import Label from './Components/Label'
import Button from './Components/Button'

import { NumberData, SpecialChatData } from './Constants/constant'

const styles = {
  sectionStyle: {
    width: '75%',
    float: 'left',
  },
  asideStyle: {
    width: '25%',
    float: 'right',
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operator1 : null,
      operator2 : null,
      operand : null,
      total: '',
    }
    this.getButtonData = this.getButtonData.bind(this)
  }

  getButtonData (value, isOperand) {

    // return if the first value is operands
    let storedValue = this.state.total
    if (!storedValue && isNaN(value)) {
      return
    }

    let operator1 = this.state.operator1
    let operand = this.state.operand
    let operator2 = this.state.operator2

    // Perform calculation
    if (operator1 && operand && operator2 && (isOperand || (value === '='))) {
      let total = this.performCalculation (operator1, operand, operator2)
      this.setState({
        total: (value === '=') ? total : (total + value),
        operator1: total,
        operand: (value === '=') ? null : value,
        operator2: null,
      })
      return
    } else if (value === '=') {
      return
    }

    if (!isOperand && operand === null) {
      this.setState({operator1: (operator1 === null) ? value : (operator1 + value)})
    } else if (isOperand && operand === null) {
      this.setState({operand: (value === '=') ? null : value})
    } else if (!isOperand && operand) {
      this.setState({operator2: (operator2 === null) ? value : (operator2 + value)})
    }

    this.setState({total: this.state.total + value})
  }

  performCalculation (operator1, operand, operator2) {
    switch (operand) {
      case '+': return (parseInt(operator1) + parseInt(operator2));
      case '-': return (operator1 - operator2);
      case '*': return (operator1 * operator2);
      case '/': return (operator1 / operator2);
      default: return 0;
    }
  }

  render () {
    return ( 
      <div className="root"> 
        <Card>
          <Label updateLabelData={this.state.total} />
          <div className='section' style={styles.sectionStyle}>
            {Object.keys(NumberData).map((value) => {
              return <Button key={value} displayName={NumberData[value]} getButtonData={this.getButtonData} width='33.33%' isOperand={false} />
            })}
          </div>
          <div className='aside' style={styles.asideStyle}>
            {Object.keys(SpecialChatData).map((value) => {
              return <Button key={value} displayName={SpecialChatData[value]} getButtonData={this.getButtonData} width='100%' isOperand={true} />
            })}
          </div>
        </Card>
      </div>
    );
  }
}

export default Calculator;