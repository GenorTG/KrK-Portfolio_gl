import React from "react";
import './CTA.scss';

const CTA:React.FC = () => {
  return (
    <div className='gpt3__cta section__margin' id='cta'>
      <div className='gpt3__cta-container'>
        <div className='gpt3__cta-texts'>
          <p className='gpt3__cta-texts-small'>Request Early Access to Get Started</p>
          <p className='gpt3__cta-texts-big'>Register today & start exploring the endless possiblities.</p>
        </div>
        <button className='gpt3__cta-button' type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA;
