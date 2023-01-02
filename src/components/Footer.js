import React from 'react';
import { Instagram,Twitter,Facebook,Pinterest } 
from '@mui/icons-material';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram />
            <Twitter />
            <Facebook />
            <Pinterest />
        </div>
        <p>&copy; 2023 honda.com</p>
    </div>
  )
}

export default Footer