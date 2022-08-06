import {GET_MOVIES, ADD_TO_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL} from '../actions/actionTypes.js'

const initialState = {
  favoriteMovies: [],
  moviesLoaded: [],
  movieDetail: {}
};

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state, 
        favoriteMovies: state.favoriteMovies
      }

    case GET_MOVIES:
      return {
        ...state, 
        moviesLoaded: action.payload
      }
  
    default:
      return state;
  }
}

export default RootReducer