export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}

export function getMovies() {
  return async function (dispatch) {
    const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cbc6a4fcf31d82d2599fd3177bad7130&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await result.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}
