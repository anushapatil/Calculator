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
      total : 0,
    }
    this.getButtonData = this.getButtonData.bind(this)
  }

  getButtonData (value) {
    let digit = !isNaN(value)
    let operator1 = this.state.operator1
    let operand = this.state.operand
    let operator2 = this.state.operator2

    // Perform calculation
    if (operator1 && operand && operator2 && !digit) {
      let total = this.performCalculation (operator1, operand, operator2)
      this.setState({
        total: total + value,
        operator1: total,
        operand: value,
        operator2: null,
      })
      return
    }

    if (digit && operand === null) {
      this.setState({operator1: (operator1 === null) ? value : (operator1 + value)})
    } else if (!digit && operand === null) {
      this.setState({operand: value})
    } else if (digit && operand) {
      this.setState({operator2: (operator2 === null) ? value : (operator2 + value)})
    }

    this.setState({total: (this.state.total === 0) ? value : this.state.total + value})
  }

  performCalculation (operator1, operand, operator2) {
    switch (operand) {
      case '+': return (operator1 + operator2);
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
              return <Button key={value} displayName={NumberData[value]} getButtonData={this.getButtonData} width='33.33%' />
            })}
          </div>
          <div className='aside' style={styles.asideStyle}>
            {Object.keys(SpecialChatData).map((value) => {
              return <Button key={value} displayName={SpecialChatData[value]} getButtonData={this.getButtonData} width='100%' />
            })}
          </div>
        </Card>
      </div>
    );
  }
}

export default Calculator;