import React from 'react'
import './Footer.css'
import googlePlayIcon from '../images/google-play.png'
import appleStoreIcon from '../images/apple-store.png'

const Footer = () => {
    return (
        <div className='footer-maindiv'>
            <div className='footer-lists'>
                <div className='footer-headings'>
                    <p className='footer-heading'>About</p>
                    <div className='footer-details'>
                    <p><a>How Xentice works</a></p>
                    <p><a>Founders Letter</a></p>
                    <p><a>Newsroom</a></p>
                    <p><a>Investors</a></p>
                    <p><a>Xentice Gold</a></p>
                    <p><a>Xentice Platinum</a></p>
                    <p><a>Startup Support</a></p>
                    <p><a>Careers</a></p>
                    </div>
                </div>
                <div className='footer-headings'>
                    <p className='footer-heading'>EXPLORE</p>
                    <div className='footer-details'>
                    <p><a>Diversity & Discrimination</a></p>
                    <p><a>Accessibility</a></p>
                    <p><a>Xentice Associates</a></p>
                    <p><a>Xentice Team</a></p>
                    <p><a>Xentice Mall</a></p>
                    <p><a>Xstudio</a></p>
                    <p><a>Xmoney</a></p>
                    <p><a>Entice Spaces</a></p>
                    </div>
                </div>
                <div className='footer-headings'>
                <p className='footer-heading'>SERVICES</p>
                <div className='footer-details'>
                <p><a>Buttons & Badges</a></p>
                    <p><a>Mobile Apps</a></p>
                    <p><a>For Companies</a></p>
                    <p><a>Mobile Apps</a></p>
                    <p><a>Review Professionals</a></p>
                    <p><a>Suggested Professionals</a></p>
                    <p><a>Resource Centre</a></p>
                    <p><a>Community Centre</a></p>
                </div>
                    
                </div>
                <div className='footer-headings'>
                <p className='footer-heading'>SUPPORT</p>
                <div className='footer-details'>
                    <p><a>Our COVID-19 Response</a></p>
                    <p><a>Help Centre</a></p>
                    <p><a>Cancellation options</a></p>
                    <p><a>Neighbourhood Support</a></p>
                    <p><a>Corporate contact</a></p>
                    <p><a>Trust & Safety</a></p>
                    <p><a>FAQ</a></p>
                    <p><a>Payment gateway</a></p>
                    </div>
                </div>
            </div>
            <div className='footer-disclaimer'>
                <div>
                <p className='footer-heading'>DISCLAIMER</p>
                    <p>
                    Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.
                    </p>
                </div>
                <div className='gp-icon-div'>
                <img src= {googlePlayIcon}/>
                </div>
                <div className='gp-icon-div'>
                <img src = {appleStoreIcon}/>
                </div>
                </div>
                <div  className='footer-allrights'>
                    <div>
                    <p>
                    © Xentice Group of Companies 2022 . All Rights Reserved
                    </p>
                    </div>
                    <div className='contactus-div'>
                        <a>About Us</a>
                        <a>Contact Us</a>
                        <a>Privacy Policy</a>
                    </div>
                    
                </div>
        </div>
    )
}

export default Footer