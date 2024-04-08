import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Privacy from './pages/Privacy';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>    
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/Contact" element = {<Contact/>} />
        <Route path="/services" element ={<Services/>} />
        <Route path="/privacy" element ={<Privacy/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
