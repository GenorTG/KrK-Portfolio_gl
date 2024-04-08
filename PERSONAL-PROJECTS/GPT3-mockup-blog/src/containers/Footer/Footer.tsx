import React from "react";
import './Footer.scss';
import logo from '../../Assets/logo.svg'

const Footer:React.FC = () => {
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button className='gpt3__footer-button' type='button'>Request Early Access</button>
      </div>

      <div className='gpt3__footer-container'>
        <div className='gpt3__footer-logo'>
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links'>
          <h1>Links</h1>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-company'>
          <h1>Company</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-git'>
          <h1>Get in touch</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-notice'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
