import React from 'react'
import './SubContentList.css'
import Builders from '../images/builders.png'
import Architects from '../images/architects.png'
import Banking from '../images/banking.png'
import ITSupport from '../images/it-support.png'
import Labourers from '../images/labourers.png'
import Mentors from '../images/mentors.png'
import Advocates from '../images/lawyer.png'
import Insurance from '../images/insurance.png'
import Lifestyle from '../images/life-style.png'
import Mart from '../images/mart.png'
import ecoLiving from '../images/ecoliving.png'

const SubContentList = () => {
    return (
        <div className='subcontent-list'>
            <div className='subcontent-list-items'>
                <div className='list-items'>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Builders} />
                                <p >Builders</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Architects} />
                                <p >Architects</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Banking} />
                                <p >Banking</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={ITSupport} />
                                <p >IT Support</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Labourers} />
                                <p >Labourers</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Mentors} />
                                <p >Mentors</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Advocates} />
                                <p >Advocates</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Insurance} />
                                <p >Insurance</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Lifestyle} />
                                <p >Lifestyle</p>
                                <p>(comming soon)</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={Mart} />
                                <p >Xentice Mart</p>
                                <p>(comming soon)</p>
                            </div>
                        </a>
                    </div>
                    <div className='list-item'>
                        <a>
                            <div className='subcontent-list-item'>
                                <img src={ecoLiving} />
                                <p >Eco Living</p>
                                <p>(comming soon)</p>
                            </div>
                        </a>
                    </div>
      
                </div>
            </div>

        </div>
    )
}

export default SubContentList