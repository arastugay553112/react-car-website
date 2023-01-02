import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/honda.jpg';
import '../styles/Home.css';

function Home() {
  return (
  <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='headerContainer'>
      <h1>Honda</h1>
      <p>Mükemmel Performans</p>
      <Link to="/model">
      <button>Modelleri Gör</button>
      </Link>
    </div>
  </div>
  )
}

export default Home