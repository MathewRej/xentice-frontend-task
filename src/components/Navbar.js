import React,{useState} from 'react'
import {
  MDBContainer,
  MDBNavbar,
} from 'mdb-react-ui-kit';
import Xentice from './images/xentice.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoginIcon from '@mui/icons-material/Login';
import CampaignIcon from '@mui/icons-material/Campaign';
import Modal from 'react-modal'
import Login from './Login/Login';
import './Navbar.css'

const customStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#fff",
      height: 'auto',
      width: '40%',
      border: '2px solid black',
      fontSize: '70%',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '20px',
      padding: '0px',

  },
};
const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const closeModal = () => (
      setModalIsOpen(false)
  )
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}>
          <Login modal = {closeModal}/>

      </Modal>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <div className='nav-logo'>
            <a href="/">
              <img src={Xentice} />
            </a>
          </div>
          <div class="col-3 col-md-3 navbar-div">
            <div className="navbar-items">
              <div className="navbar-item">

                <a className='navbar-link' href="#"onClick={() => setModalIsOpen(true)}><CampaignIcon color="disabled" />Post Ad</a>
                <a className='navbar-link' href="#" onClick={() => setModalIsOpen(true)}><LocationOnIcon color="disabled" />Near Me</a>
                <a className='navbar-link' href="#" onClick={() => setModalIsOpen(true)}><LoginIcon color="disabled"/>Login/Sign Up</a>
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar