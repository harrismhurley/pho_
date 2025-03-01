import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/index';
import About from './pages/About/index';
import Register from './pages/Register/index';
import Gallery from './pages/Gallery/index';
import Contact from './pages/Contact/index';

import NavDrawer from './components/NavDrawer/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

import './styles/App.css'
import './styles/variables.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <NavDrawer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
