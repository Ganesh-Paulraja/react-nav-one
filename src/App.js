

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

//components
import Card from './card'
import Nav from './card/nav/nav'
import About from './About/About';
import Buttons from './card/buttons/buttons';
import Footer from './card/footer/footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route exact path="/" element={<Card />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
     <Buttons/>
     <Footer/>
    </div>
  );
}

export default App;

