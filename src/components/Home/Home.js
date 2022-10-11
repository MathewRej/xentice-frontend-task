import React from 'react'
import Ads from '../Ads/Ads';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import './Home.css'
import Navbar from '../Navbar';
import SearchBusiness from '../SearchBusiness/SearchBusiness';
import SubContent from '../SubContent/SubContent';
import SubContentList from '../SubContentList/SubContentList';

const Home = () => {
  return (
    <>
    <Navbar/>
    <SubContent/>
    <SearchBusiness/>
    <SubContentList/>
    <Ads/>
    <Details/>
    <Footer/>
    

  </>
  )
}

export default Home