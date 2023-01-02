import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter, BrowserRouter as Router,Route,Routes} 
from "react-router-dom";
import Footer from './components/Footer';
import Model from './pages/Model';
import Hakkinda from './pages/Hakkinda';
import Iletisim from './pages/Iletisim';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/model' element={<Model />}/>
            <Route path='/hakkinda' element={<Hakkinda />}/>
            <Route path='/iletisim' element={<Iletisim />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
