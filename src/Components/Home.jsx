import React, {Fragment, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { getMovies } from '../redux/actions';
import { connect } from 'react-redux'



function Home(props) {

  const [editInput, setEditInput] = useState('')

  const onHandleSubmit = (event) => {
    event.preventDefault();
  }

  const onHandleChange = (e) => {
    setEditInput(e.target.value)
  }

  return (
    <div> 
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
                  <Card.Title> {movie.Title} </Card.Title>
                  <Button variant="outline-success">Add to Favorites </Button>
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
    getMovies: (movie) => dispatch(getMovies(movie))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Home)