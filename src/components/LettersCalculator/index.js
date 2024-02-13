import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <div className="calculator">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                className="img-1"
                alt="letters calculator"
              />
            </div>
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <div>
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <br />
              <input
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                className="input-text"
                value={inputPhrase}
                onChange={this.onChangeInput}
              />
              <br />
              <p className="para">No.of letters: {inputPhrase.length}</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="img"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
