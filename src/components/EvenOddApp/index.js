// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, text: 'Even'}

  onIncrement = () => {
    const {number, text} = this.state

    const no = parseInt(Math.random() * 100)
    let content
    if (no % 2 === 0) {
      content = 'Even'
    } else {
      content = 'Odd'
    }

    this.setState({number: no, text: content})
  }

  render() {
    const {number, text} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {number}</h1>
          <p className="para">Count is {text}</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="para2">Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
