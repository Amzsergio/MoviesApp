import {GET_MOVIES, ADD_TO_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL} from '../actions/actionTypes.js'

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

export function getMovieDetail(){
    return {
        type:GET_MOVIE_DETAIL,
        payload: ''
    }
}

export function addMovieFavorite(){
    return {
        type:ADD_TO_FAVORITE,
        payload: ''
    }
}

export function removeMovieFavorite(){
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: ''
    }
}