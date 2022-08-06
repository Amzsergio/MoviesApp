import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Favorites from '../src/Components/Favorites.jsx';
import Home from './Components/Home.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <NavbarComp/>

        <div>
          <Routes>
            <Route path='/about' element={<Favorites />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
