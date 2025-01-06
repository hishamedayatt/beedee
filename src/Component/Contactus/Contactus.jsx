import React from 'react'
import './Contactus.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/envelope.png'
import call_icon from '../../assets/telephone.png'
import location_icon from '../../assets/location.png'
import clock from '../../assets/clock1.png'
import send from '../../assets/send.png'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'



const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div variants={fedeIn("down",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false,amount:0.7}}
                       className='contact'>
      <div className="contact-col">
        <h3>Send us Message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente ut velit, sunt sequi quaerat vel doloribus assumenda enim natus repellendus adipisci dicta placeat et eius sit nisi modi id.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
          <li><img src={call_icon} alt="" />+96655522222</li>
          <li><img src={location_icon} alt="" />55 sharha <br />sharja , dubai</li>
          <li><img src={clock} alt="" /> Monday - Thuresday : 8:00 AM - 4:00 PM <br />Friday : 8:00 AM - 12:00 PM</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
  
          <input type="text" name='name' placeholder='Enter your name' required />
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" rows='6' placeholder='Enter your messege here' required></textarea>
          <button type='submit' className='btn btn-sub'>Send Messsage<img src={send} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
      
    </motion.div>
  )
}

export default Contactus
