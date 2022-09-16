import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../../redux/actions/index.js'

function Movie(props) {
  
  let { idMovie } = useParams();

  
  useEffect(() => {
    props.getMovieDetail(idMovie)
  }, []);

  
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movieDetail.Poster} />
      <Card.Body>
        <Card.Title>{props.movieDetail.Title}</Card.Title>
        <Card.Text>
        {props.movieDetail.Plot}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

function mapDispatchToProps(dispatch){
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
  }
}

function mapStateToProps(state){
  return {
    movieDetail: state.movieDetail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)