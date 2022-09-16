import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import { removeMovieFavorite } from '../../redux/actions';


function Favourites(props) {

  console.log(props.favouriteMovies)

  return (
    <ListGroup as="ol" numbered>
        {props.favouriteMovies.map(movie => {
          return(
            <ListGroup.Item key={movie.imdbID} as="li" className="d-flex justify-content-between align-items-start">
                <Card className='mt-5'>
                  <Link to={`/movie/${movie.imdbID}`}> 
                    <Card.Title> {movie.Title} </Card.Title>
                  </Link>
                  <Button variant="outline-danger" onClick={() => props.deleteFavouriteMovie(movie.imdbID)}>  X  </Button>
                </Card>    
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  )
}

function mapStateToProps(state){
  return {
    favouriteMovies: state.favouriteMovies
  }
}

function mapDispatchToProps(dispatch){
  return {
    deleteFavouriteMovie: (id) => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)