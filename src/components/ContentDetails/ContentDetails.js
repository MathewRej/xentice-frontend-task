import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import './ContentDetails.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Footer from '../Footer/Footer';
import axios from 'axios';

const ContentDetails = () => {
   
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
        <div>
            <Navbar />
            <div className='content-div'>
                <div className='sidebar-content'>
                    <div className='sidebar-heading'>
                        <h4>Filter</h4>
                    </div>
                    <div>
                        <button className='transaction-btn'>
                            <div className='filter-types'>
                                <p>Transaction Type</p>
                                <label className='filter-types-label'><ArrowDropDownIcon /></label>
                            </div>
                        </button>

                    </div>
                    <select className='filter-types-dropdown'>
                        <option value="Select">Select</option>
                        <option value="Rent">Rent</option>
                        <option value="Sell">Sell</option>
                        <option value="Lease">Lease</option>
                    </select>
                    <div>
                        <button className='transaction-btn'>
                            <div className='filter-types'>
                                <p>Price</p>
                                <label className='filter-types-label'><ArrowDropDownIcon /></label>
                            </div>
                        </button>
                        <div>
                            <input type="number" placeholder='Price' className='number-field' />
                            <select className='filter-types-dropdown-price'>
                                <option value="Select">/</option>
                                <option value="Rent">/Hr</option>
                                <option value="Sell">/Sqr.ft</option>
                                <option value="Lease">/Month</option>
                                <option value="Sell">/Seat</option>
                                <option value="Lease">Day</option>
                                <option value="Lease">Year</option>
                            </select>
                        </div>


                    </div>
                    <div>
                        <button className='transaction-btn'>
                            <div className='filter-types'>
                                <p>Build Area</p>
                                <label className='filter-types-label'><ArrowDropDownIcon /></label>
                            </div>
                        </button>
                        <div>
                            <input type="number" placeholder='Price' className='number-field' />
                            <select className='filter-types-dropdown-price'>
                                <option value="Select">select</option>
                                <option value="Rent">Sq-ft</option>
                                <option value="Sell">Sq-m</option>
                                <option value="Lease">Sq-yrd</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className='transaction-btn'>
                            <div className='filter-types'>
                                <p>Plot Area</p>
                                <label className='filter-types-label'><ArrowDropDownIcon /></label>
                            </div>
                        </button>
                        <div>
                            <input type="number" placeholder='Price' className='number-field' />
                            <select className='filter-types-dropdown-price'>
                                <option value="Select">select</option>
                                <option value="Rent">Sq-ft</option>
                                <option value="Sell">Sq-m</option>
                                <option value="Lease">Sq-yrd</option>
                                <option value="Select">Acre</option>
                                <option value="Rent">Bigha</option>
                                <option value="Sell">Hectare</option>
                                <option value="Lease">Marla</option>
                                <option value="Select">Kanal</option>
                                <option value="Rent">Biswa1</option>
                                <option value="Sell">Biswa2</option>
                                <option value="Lease">Ground</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='main-content'>

            </div>
            <Footer />
        </div>
    )
}

export default ContentDetails