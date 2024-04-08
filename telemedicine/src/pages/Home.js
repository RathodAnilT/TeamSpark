import React from 'react'
import Layout from '../components/Layout/Layout'
import './Home.css'
import image from '../Assets/bg2.jpeg'

const Home = () => {
  return (
    <div className='home-page'>
    <Layout >
      <>
      
      <div className='heading'>
      <h1 className='head'>Welcome to Our Telemedicine Platform</h1>
      <p className='head2'>
          Welcome to our cutting-edge telemedicine platform, <br />designed to revolutionize healthcare accessibility from the comfort of your home. <br />Our platform offers a seamless and secure way to connect with healthcare professionals,<br /> providing virtual consultations, remote monitoring, and personalized treatment plans..
        </p> 
        </div> 
        <img src={image}alt="Telemedicine Imag" className='image' />
        <img src={image}alt="Telemedicine Imag" className='image' />
        <img src={image}alt="Telemedicine Imag" className='image' />

       
        
      </>
     
    </Layout>
    </div>
  )
}

export default Home
