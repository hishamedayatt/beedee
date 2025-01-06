import React,{ useState } from 'react'
import './Faq.css'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'


const Faq = () => {

    const faqs = [
        {id:1, question: "Q: How long does it take to set up a business in the UAE ?", answer: "The process usually takes 1-3 weeks, depending on the business activity, location, and documentation requirements." },
        {id:2, question: "Q: Do you assist with customs duties and tax payments?", answer: " Yes, we handle customs duties, VAT compliance, and payments as part of our customs clearance services." },
        {id:3, question: "Q: What types of documents do you assist with?", answer: " We assist with trade licenses, tax registrations, contracts, permits, and any other business-related paperwork required for compliance with UAE regulations." },
        {id:4, question: "Q: What types of visas do you assist with?", answer: " We assist with investor visas, partner visas, employment visas, family visas, and residency permits." },
      ];

      const [activeIndex, setActiveIndex] = useState(null);
      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };


  return (
    <div className="faq-container">
      <motion.div variants={fedeIn("left",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:false,amount:0.7}}>
      <h2>FAQs</h2>
      <h3>Do you have <span>Questions</span>?</h3>
      <p>Here are some frequently asked questions. Feel free to contact us if you have more queries.</p>
      </motion.div>
     
      <motion.div  variants={fedeIn("down",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:false,amount:0.7}} className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Faq
