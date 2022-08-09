import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Home from './Components/Home.jsx';
import Favourites from './Components/Favourites.jsx';
import { Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie.jsx';


function App() {
  return (
      <div className="App">
        <NavbarComp/>

        <div>
          <Routes>
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<Movie />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
