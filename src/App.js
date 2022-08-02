import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import About from '../src/Components/About.jsx';
import Home from './Components/Home.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <NavbarComp/>

        <div>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
