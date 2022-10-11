import React from 'react'
import './Ads.css'
import AdsIcon from '../images/AdsIcon.png'
import Ads1 from '../images/Ad1.png'

const Ads = () => {
  return (
    <div>
      <div className='ads-div'>
        <div className='ads1'>
          <img src={AdsIcon}/>
        </div>
        <div className='ads2'>
          <img src ={Ads1}/>
        </div>
      </div>

    </div>
  )
}

export default Ads