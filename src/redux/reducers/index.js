import {GET_MOVIES, ADD_TO_FAVOURITE, REMOVE_MOVIE_FAVOURITE, GET_MOVIE_DETAIL} from '../actions/actionTypes.js'

const initialState = {
  favouriteMovies: [],
  moviesLoaded: [],
  movieDetail: {}
};

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state, 
        favouriteMovies: [...state.favouriteMovies, action.payload]
      }

    case REMOVE_MOVIE_FAVOURITE:
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.filter((movie) => movie.imdbID !== action.payload)
      }

    case GET_MOVIES:
      return {
        ...state, 
        moviesLoaded: action.payload
      }``
  
    default:
      return state;
  }
}

export default RootReducer