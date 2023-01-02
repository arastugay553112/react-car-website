import React,{useState} from 'react';
import Logo from '../assets/carlogo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Model from '../pages/Model';

function Navbar() {

const [openLinks,setOpenLinks]=useState(false);

const toggleNavbar = ()=>{
  setOpenLinks(!openLinks)
};

  return (
    <div className='navbar'>
    <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo}/>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/model">Model</Link>
        <Link to="/hakkinda">Hakkında</Link>
        <Link to="/iletisim">İletişim</Link>
        </div>
    </div>
    <div className='rightSide'>
        <Link to="/">Anasayfa</Link>
        <Link to="/model">Model</Link>
        <Link to="/hakkinda">Hakkında</Link>
        <Link to="/iletisim">İletişim</Link>
        <button onClick={toggleNavbar}>
           <ReorderIcon />
        </button>
    </div>
</div>
  )
}

export default Navbar

