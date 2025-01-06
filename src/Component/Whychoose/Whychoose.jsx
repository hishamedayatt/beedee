import React from 'react'
import { FaHourglass, FaUserShield, FaAward, FaHeadset,FaRegCheckCircle } from "react-icons/fa";
import './Whychoose.css'
import { motion } from 'framer-motion'
import {fedeIn} from '../../motion'

const Whychoose = () => {

    // const features = [
    //     {
    //       icon: <FaChartLine />,
    //       title: "Proven Results",
    //       description: "We deliver measurable success and growth to your business.",
    //     },
    //     {
    //       icon: <FaUsers />,
    //       title: "Expert Team",
    //       description: "Our consultants are experienced professionals in their fields.",
    //     },
    //     {
    //       icon: <FaAward />,
    //       title: "Quality Assurance",
    //       description: "We ensure the highest quality in our services.",
    //     },
    //     {
    //       icon: <FaHeadset />,
    //       title: "24/7 Support",
    //       description: "Our team is always available to assist you, anytime, anywhere.",
    //     },
    //   ];
    const features = [
      {
        icon: "💡", // Replace with an appropriate icon or an image
        title: "Expert Guidance",
        description: "Personalized solutions from experienced professionals to ensure your business thrives with the right advice and support.",
      },
      {
        icon: <FaRegCheckCircle/>,
        title: "Time Efficiency",
        description: "Streamlined processes to save your time, letting you focus on growing your business.",
      },
      {
        icon: <FaUserShield/>,
        title: "Compliance & Accuracy",
        description: "Ensuring all processes adhere to UAE regulations with precision and reliability.",
      },
      {
        icon: "👥",
        title: "Comprehensive Support",
        description: "Providing end-to-end assistance, from setup to daily operations, for seamless business management.",
      },
    ];




  return (
    <div className="why-choose-us">

      <motion.div  variants={fedeIn("up",0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                    z className="features-grid">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>


    // <div className='why-choose-us'>
    //   <h2>Why Choose Us</h2>
    //   <p>Your success is our priority. Here's what sets us apart:</p>
    //   <div className="features">
    //     {features.map((feature, index) => (
    //       <div className="feature-card" key={index}>
    //         <div className="icon">{feature.icon}</div>
    //         <h3>{feature.title}</h3>
    //         <p>{feature.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}

export default Whychoose
