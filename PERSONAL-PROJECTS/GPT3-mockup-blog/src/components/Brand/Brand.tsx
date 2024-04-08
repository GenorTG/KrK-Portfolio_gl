import React from "react";
import './Brand.scss';
import { google, slack, atlassian, dropbox, shopify } from './import'

const Brand:React.FC = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-container'>
        <img src={google} alt='google'></img>
        <img src={slack} alt='slack'></img>
        <img src={atlassian} alt='atlassian'></img>
        <img src={dropbox} alt='dropbox'></img>
        <img src={shopify} alt='google'></img>
      </div>
    </div>
  )
}

export default Brand;
