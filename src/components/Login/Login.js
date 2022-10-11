import React, { useState } from 'react'
import './Login.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import Modal from 'react-modal';
import Xentice1 from '../images/xentice1.png'
import CloseIcon from '../images/close.png'





const Login = (modal) => {
    console.log("sssss", modal.modal)


    return (
        <div className='login-main'>
            <div className='signup'> 
                <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                    <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                    <MDBBtn size='lg'>
                        Login
                    </MDBBtn>

                    <hr className="my-4" />

                    <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                        <MDBIcon fab icon="google" className="mx-2" />
                        Sign in with google
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Sign in with facebook
                    </MDBBtn>

                </MDBCardBody>
            </MDBCard>
            </div>



            <div className='login-contents'>
            <div className='login-xentice-icon'>
                <a onClick={() => modal.modal()}>
                    <img src={Xentice1} className="xentice-icon" />
                    <img src={CloseIcon} className="close-icon" />
                </a>
            </div>
            <div className='login-xentice-title'>
                <p>  Login to your account to unlock these benefits</p>
            </div>
            <div className='login-xentice-li'>
                <ul>
                    <li>Get latest updates about Properties and Projects.</li>
                    <li>Access millions of advertiser details in one click.</li>
                    <li>Get market information, reports and price trends.</li>
                    <li>Advertise your property for free!</li>
                </ul>
            </div>

            </div>




        </div>
    )
}

export default Login