import React, {useState, useEffect} from 'react'
import './SubContent.css'
import commercialShop from '../images/commercial-shop.png'
import commercialOffice from '../images/commercial-office.png'
import coWorkingSpace from '../images/co-working-space.png'
import commercialBuilding from '../images/commercial-building.png'
import commercialLand from '../images/commercial-land.png'
import industrialBuilding from '../images/industrial-building.png'
import industrialLand from '../images/industrial-land.png'
import privateOffice from '../images/private-office.png'
import meetingRoom from '../images/meeting-room.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SubContent = () => {
    const [content, setContent] = useState({})
    const contentName = [
        {
            label: 'Commercial Shop',
            link: 'commercial-shop',
            logo: commercialShop
        },
        {
            label: 'Commercial Office',
            link: 'commercial-office',
            logo: commercialOffice
        },
        {
            label: 'Commercial Land',
            link: 'commercial-land',
            logo: commercialLand
        }, 
        {
            label: 'Commercial Building',
            link: 'commercial-building',
            logo: commercialBuilding
        }, 
        {
            label: 'Industrial Building',
            link: 'industrial-building',
            logo: industrialBuilding
        }, 
        {
            label: 'Industrial Land',
            link: 'industrial-land',
            logo: industrialLand
        }, 
        {
            label: 'Co-working Space',
            link: 'co-working-space',
            logo: coWorkingSpace
        },
         {
            label: 'Private Office',
            link: 'private-room',
            logo: privateOffice
        }, 
        {
            label: 'Meeting Room',
            link: 'meeting-room',
            logo: meetingRoom
        }
    ]


    return (
        <div className='subcontent-div'>
            <div className='subcontent-items'>
                <div className='items'>
                    {contentName.map((item) => {
                        return(
                         <Link to={`/contentDetails/${item.link}/`}>
                         <div className='subcontent-item'>
                             <img src={item.logo} />
                             <p >{item.label}</p>
                         </div>
                         </Link>
                        )
                    })}
                    
                    
                </div>
            </div>


        </div>
    )
}

export default SubContent