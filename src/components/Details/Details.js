import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Details.css'
import commercialShop1 from '../images/commercial-shop1.png'
import commercialOffice1 from '../images/commercial-office1.png'
import coWorkingSpace1 from '../images/co-working-space1.png'
import commercialBuilding1 from '../images/commercial-building1.png'
import commercialLand1 from '../images/commercial-land1.png'
import industrialBuilding1 from '../images/industrial-building1.png'
import industrialLand1 from '../images/industrial-land1.png'
import privateOffice1 from '../images/private-office1.png'
import meetingRoom1 from '../images/meeting-room1.png'
import Buildings from '../images/buildings.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from 'react-slick'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';



const Details = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    const [data, setData] = useState({})
   
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.xentice.com/api/postadSelect'
        }).then(resp => {
            console.log('resp.data: ', JSON.parse(resp.data[0].propertyType).name);
            setData(
                resp.data

            )
        })
    }, [])

    return (
        <div className='details-main'>
            {console.log("Fasfas", data)}
            <div className='details-heading'>
                <img src={commercialShop1} />
                <label className='commercial-shop'>Commercial Shop</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Commercial Shop"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        <LocationOnIcon/>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}


            </Slider>
            <div className='details-heading'>
                <img src={commercialOffice1} />
                <label className='commercial-shop'>Commercial Office</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Commercial Office"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>
            <div className='details-heading'>
                <img src={commercialLand1} />
                <label className='commercial-shop'>Commercial Land</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Commercial Land"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>
            <div className='details-heading'>
                <img src={industrialBuilding1} />
                <label className='commercial-shop'>Commercial Building</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Commercial Building"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>
            <div className='details-heading'>
                <img src={commercialBuilding1} />
                <label className='commercial-shop'>Industrial Building</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Industrial Building"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>



            <div className='details-heading'>
                <img src={industrialLand1} />
                <label className='commercial-shop'>Industrial Land</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Industrial Land"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>





            <div className='details-heading'>
                <img src={coWorkingSpace1} />
                <label className='commercial-shop'>Co-working Space</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Co-working Space"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>
            <div className='details-heading'>
                <img src={privateOffice1} />
                <label className='commercial-shop'>Private Office</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Private Office"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...'  className='card-details-image'/>
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>
            <div className='details-heading'>
                <img src={meetingRoom1} />
                <label className='commercial-shop'>Meeting Room</label>
            </div>
            <Slider {...settings}>
                {data && data.length > 0 && data.filter(
                    (obj) => JSON.parse(obj.propertyType).name === "Meeting Room"
                ).map((i) => {
                    return (
                        <div>
                            <MDBCard className='card-details'>
                                <MDBCardImage src={JSON.parse(i.images)} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardText>{JSON.parse(i.details).title}
                                        <label className='like-icon'><FavoriteBorderIcon /></label></MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.location).city}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {JSON.parse(i.priceRange).start}
                                        {JSON.parse(i.priceRange).end}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Explore</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Details