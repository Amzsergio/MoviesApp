import {GET_MOVIES, ADD_TO_FAVOURITE, REMOVE_MOVIE_FAVOURITE, GET_MOVIE_DETAIL} from '../actions/actionTypes.js'

const API_KEY = '6d022ee2'

export function getMovies(title){
    return(dispatch) => {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
        .then(res => res.json())
        .then(json => {
            return dispatch({
                type: GET_MOVIES,
                payload: json.Search
            })
        })
    }
}

export function getMovieDetail(id){
    return(dispatch) => {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(json => {
            return dispatch({
                type: GET_MOVIE_DETAIL,
                payload: json
            })
        })
    }
}

export function addMovieFavourite(movieInfo){
    return {
        type:ADD_TO_FAVOURITE,
        payload: movieInfo
    }
}

export function removeMovieFavorite(id){
    return {
        type: REMOVE_MOVIE_FAVOURITE,
        payload: id
    }
}