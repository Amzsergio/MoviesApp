import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Footer.css'


const Footer = () => {
  return (
    <div>
        <footer className='text-white py-4 bg-dark footer'>
            <CardGroup className="container">
                    <Card>
                        <Link to='/' class='text-decoration-none text-reset fw-bold fs-4'>
                            <img src="/yourMovieLogo.png" alt="yourMovie Logo" width='60' height='60' /> MyMovies
                        </Link>
                    </Card>
                    <Card>
                        <ul className='col-12 col-md-4 list-unstyled'>
                            <li className='fw-bold mb-2 text-center'> My Movies</li>
                            <li><Link to='/' className='text-decoration-none text-reset text-center'>Home</Link></li>
                            <li><Link to='/about' class='text-decoration-none text-reset'>About</Link></li>
                            <li><Link to='/favourites' class='text-decoration-none text-reset'>Favourites</Link></li>
                        </ul>
                    </Card>
                    <Card>
                        <ul className='col-12 col-md-4 list-unstyled'>
                            <li className='fw-bold mb-4 text-center'> Social Media</li>
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
                    </Card>
            </CardGroup>
        </footer>
    </div>
  )
}

export default Footer