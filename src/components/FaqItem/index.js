// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showingAnswer: false}

  onClickingFaqButton = () => {
    this.setState(prevState => ({
      showingAnswer: !prevState.showingAnswer,
    }))
  }

  render() {
    const {showingAnswer} = this.state
    const {faqsList} = this.props
    const {questionText, answerText} = faqsList

    const faqIconImage = showingAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const faqIconAlt = showingAnswer ? 'minus' : 'plus'

    return (
      <li className="faq-item-bg-container">
        <div className="faqs-question-container">
          <h1 className="faqs-question">{questionText}</h1>
          <button
            type="button"
            className="faqs-button"
            onClick={this.onClickingFaqButton}
          >
            <img
              src={faqIconImage}
              alt={faqIconAlt}
              className="plus-minus-icon"
            />
          </button>
        </div>
        {showingAnswer && <hr />}

        {showingAnswer && <p className="faq-answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
