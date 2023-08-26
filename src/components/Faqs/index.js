// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="faqs-bg-container">
        <div className="faqs-inner-container">
          <h1 className="faqs-title">FAQs</h1>
          <ul className="faqs-ul-container">
            {faqsList.map(each => (
              <FaqItem faqsList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
