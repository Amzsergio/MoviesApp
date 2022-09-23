import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
        <footer className='text-white py-4 bg-dark'>
            <div className="container">
                <nav className='row'>
                    <div className='col-12 col-md-3 d-flex align-items-center justify-content-start ps-0'>
                        <Link to='/' class='text-decoration-none text-reset fw-bold fs-4'>
                            <img src="/yourMovieLogo.png" alt="yourMovie Logo" width='60' height='60' /> MyMovies
                        </Link>
                    </div>
                    <ul className='col-12 col-md-4 list-unstyled'>
                        <li className='fw-bold mb-2 text-center'> My Movies</li>
                        <li><Link to='/' class='text-decoration-none text-reset'>Home</Link></li>
                        <li><Link to='/about' class='text-decoration-none text-reset'>About</Link></li>
                        <li><Link to='/favourites' class='text-decoration-none text-reset'>Favourites</Link></li>
                    </ul>
                    <ul className='col-12 col-md-4 list-unstyled'>
                        <li className='fw-bold mb-4 text-center'> Follow Us</li>
                        <li className='d-flex justify-content-between'>
                            <a href="https://github.com/Amzsergio" target='_blank' class='text-decoration-none text-reset'>
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.facebook.com/amzsergioandres" target='_blank' class='text-decoration-none text-reset'>
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://github.com/Amzsergio" target='_blank' class='text-decoration-none text-reset'>
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.instagram.com/amzsergio/" target='_blank' class='text-decoration-none text-reset'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Footer