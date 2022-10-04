import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Footer = () => {
  return (
    <div>
        <footer className='text-white py-2 bg-dark'>
            <CardGroup className="container">
                    <Card border='dark' className='bg-dark py-4'>
                        <Link to='/' className='text-center text-decoration-none fw-bold fs-4 text-danger'>
                            <Card.Img  style={ {width: "50px"}} variant='top' src="/yourMovieLogo.png" alt="yourMovie Logo" /> MyMovies
                        </Link>
                    </Card>
                    <Card border='dark' className='bg-dark text-center'>
                        <ul className='col-12 col-md-4 list-unstyled mx-auto' >
                            <li className='fw-bold mb-2 text-center text-danger'> My Movies</li>
                            <li><Link to='/' className='text-decoration-none text-reset text-center'>Home</Link></li>
                            <li><Link to='/about' class='text-decoration-none text-reset'>About</Link></li>
                            <li><Link to='/favourites' class='text-decoration-none text-reset'>Favourites</Link></li>
                        </ul>
                    </Card>
                    <Card border='dark' className='bg-dark'>
                        <ul className='col-12 col-md-4 list-unstyled mx-auto'>
                            <li className='fw-bold mb-4 text-center text-danger' > Social Media</li>
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
