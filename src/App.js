import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import Favourites from './Components/Favourites/Favourites.jsx';
import { Routes, Route } from 'react-router-dom';
import Movie from './Components/Movies/Movie.jsx';
import Footer from './Components/Footer/Footer.jsx';


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
          
        <Footer/>
      </div>
  );
}

export default App;
