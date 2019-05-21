import * as CONSTANT from './constants';

export const getNews = () => dispatch => {
  const url = 'https://randomuser.me/api/?results=10';
  dispatch({ type: CONSTANT.UPDATE_STATUS, loading: true});
  fetch(url)
    .then(response => response.json())
    .then(data => {
      return dispatch({ type: CONSTANT.GET_NEWS, data: data.results });
    })
    .then(() => {
      dispatch({ type: CONSTANT.UPDATE_STATUS, loading: false });
    })
}