import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.Brimston1} alt="" />
                <p>Enjoy a wide selection of delicious meals from local restaurants delivered fast and fresh to your doorstep. Our website offers easy online ordering, secure payment options, diverse cuisines, real-time order tracking, and excellent customer service for a seamless dining experience.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-222-340-7890</li>
                    <li>contact@craveswift.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">CopyRight 2024 @ CraveSwift.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer