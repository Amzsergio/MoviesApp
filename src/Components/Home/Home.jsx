import React, {Fragment, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { getMovies, addMovieFavourite } from '../../redux/actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'



function Home(props) {

  const [editInput, setEditInput] = useState('')

  const onHandleSubmit = (event) => {
    event.preventDefault();
  }

  const onHandleChange = (e) => {
    setEditInput(e.target.value)
  }

  return (

    <div className="d-flex flex-column min-vh-100"> 
      <h1>Searcher</h1>
       <h4>Movie:</h4>
        <Form className="d-flex" onSubmit={(e) => onHandleSubmit(e)}>
            <input
            type="text"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            autoComplete='off'
            value={editInput}
            onChange={(e)=> onHandleChange(e)}
            />
            <Button type='submit' variant="outline-secondary" onClick={() => props.getMovies(editInput)}>Search</Button>
        </Form>    
        <div>
          <ul>
            {props.moviesLoaded.map((movie) => {

              return(
                  <Card className='mt-5' key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}> 
                    <Card.Title> {movie.Title} </Card.Title>
                  </Link>
                  <Button variant="outline-success" onClick={() => props.addToFavourite(movie)}>  💚 Favourites </Button>
                </Card>                
              )
            })}
          </ul>
        </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    moviesLoaded: state. moviesLoaded
  }
}

function mapDispatchToProps(dispatch){
  return{
    getMovies: (movie) => dispatch(getMovies(movie)),
    addToFavourite: (movieObject) => dispatch(addMovieFavourite(movieObject))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Home)