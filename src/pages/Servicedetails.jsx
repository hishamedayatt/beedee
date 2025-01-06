
import React from 'react'
import { useParams } from 'react-router-dom'
import Navebar from '../Component/Navebar/Navebar';
import Title from '../Component/Title/Title'
import Faq from '../Component/Faq/Faq'
import Contactus from '../Component/Contactus/Contactus'
import Whychoose from '../Component/Whychoose/Whychoose'
import Footer from '../Component/Footer/Footer'
import './Servicedetails.css'
import { div, image, title } from 'framer-motion/m';
import business from '../assets/business1.avif'
import customs from '../assets/cust.jpg'
import document from '../assets/document.png'
import visa from '../assets/visa.jpg'
import { motion } from 'framer-motion'
import {fedeIn} from '../motion'
import check from '../assets/checkmark.png'




const Servicedetails = () => {

    const { id } = useParams();
    const serviceData = { 
        1:{title: "Business Setup (Free Zone/Mainland)",
            description: "Starting a business in the UAE is a golden opportunity, and Beedee Associates FZE ensures the process is smooth and stress-free. Whether you’re opting for a Free Zone setup with 100% ownership and tax incentives or a Mainland company offering broader market access, we guide you every step of the way. Our end-to-end services include trade name approval, license acquisition, shareholder agreements, and PRO services, ensuring full compliance with UAE regulations.With our expert team by your side, you can focus on your vision while we handle the complexities. From navigating the legal framework to providing tailored advice on business structures, we ensure your setup aligns with your goals.Trust Beedee Associates FZE to help you establish your presence in one of the world’s most dynamic markets, empowering you to unlock your business's full potential with confidence and ease.",image:business},
        2:{title: "Customs Clearance",
            description: "Navigating customs regulations in the UAE can be challenging, but Beedee Associates FZE is here to make it seamless and stress-free. We specialize in providing comprehensive customs clearance solutions that ensure the smooth import and export of goods. Our team takes care of everything—from preparing precise documentation and calculating customs duties to ensuring full compliance with UAE customs laws.Whether you’re handling bulk shipments, time-sensitive consignments, or specialized items, we work diligently to eliminate delays and streamline the process. Our expertise in customs procedures and regulations means you can focus on growing your business while we manage the complexities of your supply chain.With Beedee Associates FZE, you get a reliable partner dedicated to optimizing your logistics operations, saving time, and reducing costs. Trust us to keep your business moving efficiently in the fast-paced global trade environment.",image:customs},
        3:{title: " Documentation Assistance",
            description: "Proper documentation is fundamental to business success, and Beedee Associates FZE is here to ensure you’re always on the right path. Our comprehensive documentation services cover every aspect of your business needs, including trade licenses, certifications, legal contracts, corporate bank account setup, and tax registration. We pride ourselves on delivering accurate and compliant paperwork that adheres to UAE regulations, eliminating the risks of costly delays, errors, or penalties. Whether you’re launching a new venture or managing an established business, our team streamlines the administrative process, freeing you to focus on your core objectives. At Beedee Associates FZE, we simplify even the most complex documentation requirements. From renewals and updates to entirely new filings, we provide end-to-end support tailored to your specific needs. Let us handle the intricacies of business documentation while you concentrate on driving your business toward growth and success.",image:document},
        4:{title: "Visa & Immigration Services",
            description: "Securing visas and navigating immigration processes in the UAE can often be overwhelming, but Beedee Associates FZE simplifies it for you. We specialize in providing visa solutions for investors, employees, families, and residents, handling everything from application preparation to obtaining approvals.Our experienced team ensures that all your documentation is accurate, complete, and in full compliance with the latest UAE immigration laws. Whether you need multiple visas for employees or personalized assistance for individual visa applications, we manage the entire process with ease and efficiency. With Beedee Associates FZE, you can count on a hassle-free experience, allowing you to focus on your business and personal commitments while we take care of the paperwork. Our goal is to make your visa and immigration journey smooth and stress-free, ensuring timely processing and compliance with all requirements. Trust us to provide expert support for all your UAE visa and immigration needs.",image:visa}
    };

    const service = serviceData[id];

  return (
    <div className='details'>
        <div className='nav'>
            <Navebar />
        </div>
        <div className="banner">
            <h2>Services</h2>
        </div>
        <div className="web-development">
        <Title title={service.title}/>
        <p className="paragraph">
            {service.description}
        </p>
        <div className="content-section">
            <div className="image-container">
            <img
                src={service.image} alt=""/> 
            </div>
            <div className="features">
            <h2 className="features-header">We Serve The Best Work</h2>
            <ul className="features-list">
                <li>✅ Up am intention on dependent questions</li>
                <li>✅ Surrounded affronting favorable</li>
                <li>✅ Sed ut perspiciatis unde omnis iste natus</li>
                <li>✅ Special Careness Risk Free</li>
                <li>✅ Bibend auctor nisi elit volume are beguiled</li>
            </ul>
            </div>
      </div>
      <div>
        <Faq />
        <Title subTitle='Best Consulting Firm' title='The Best Choice For Your Successful Business!'/>
        <Whychoose/>
        <Title subTitle='Let’s Connect!' title='Let’s Build Your Business Together'/>
        <Contactus/>
      </div>
    </div>
    <Footer/>


    
    </div>
  );

};


export default Servicedetails
