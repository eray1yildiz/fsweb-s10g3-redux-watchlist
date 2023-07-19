import {
  ADD_LIST,
  FIRST_MOVIE,
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
  REMOVE_LIST,
} from "../actions/moviesAction";
import { movies } from "../movies";

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      if (state.favMovies.find(fav => fav.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          favMovies: [...state.favMovies, action.payload],
        };
      }
    case REMOVE_LIST:
      return {
        ...state,
        favMovies: state.favMovies.filter(movie => movie.id !== action.payload),
      };

    case PREVIOUS_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case FIRST_MOVIE:
      return {
        ...state,
        sira: 0,
      };

    default:
      return state;
  }
};

export default reducer;
