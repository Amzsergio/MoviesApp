import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/Navbar/NavbarComp';
import Home from './Components/Home/Home.jsx';
import Favourites from './Components/Favourites/Favourites.jsx';
import { Routes, Route } from 'react-router-dom';
import Movie from './Components/Movies/Movie.jsx';


function App() {
  return (
      <div className="App">
        <NavbarComp/>

        <div>
          <Routes>
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/' element={<Home />} />
            <Route path='/movie/:idMovie' element={<Movie />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
