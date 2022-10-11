import React from 'react'
import './SearchBusiness.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

const SearchBusiness = () => {
    return (
        <div className='search-business-div'>
            <MDBCard alignment='center' className='business-card'>
                <MDBCardBody>
                    <MDBCardTitle className='card-title'>Choose from 25,00+ Spaces for your Business</MDBCardTitle>
                    <MDBCardText className='card-text'>Get inspired and find your perfect place</MDBCardText>
                    <MDBCardText>
                        <select className='business-dropdown'>
                            <option>Looking for</option>
                            <option>Commercial Shop</option>
                            <option>Commercial Office</option>
                            <option>Commercial Land</option>
                            <option>Commercial Building</option>
                            <option>Industrial Land</option>
                            <option>Co-working Space</option>
                            <option>Private Office</option>
                            <option>Meeting Room</option>
                        </select>

                    </MDBCardText>

                    <MDBCardText>
                        <select className='business-dropdown' >
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Noida</option>
                            <option>Hydrabad</option>
                            <option>Mumbai</option>
                            <option>Cochin</option>
                            <option>Bangalore</option>
                            <option>Chennai</option>
                        </select>

                    </MDBCardText>

                    <MDBBtn href='#' className='search-button'>Search</MDBBtn>

                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default SearchBusiness