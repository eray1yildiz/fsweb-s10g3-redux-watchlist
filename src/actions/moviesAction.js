export const REMOVE_LIST = "REMOVE_LIST";
export const ADD_LIST = "ADD_LIST";

export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const FIRST_MOVIE = "FIRST_MOVIE";

export const removeList = id => {
  return { type: REMOVE_LIST, payload: id };
};

export const addList = movie => {
  return { type: ADD_LIST, payload: movie };
};

export const previousMovie = () => {
  return { type: PREVIOUS_MOVIE };
};
export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};
export const firstMovie = () => {
  return { type: FIRST_MOVIE };
};
