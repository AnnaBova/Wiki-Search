import axios from 'axios';
import { SEARCH, GET_GOOGLE_SUGGEST } from './actionTypes';

const wikiEndpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=';
const googleSuggestEndpoint = 'http://suggestqueries.google.com/complete/search?output=firefox&client:youtube&hl=en&q=React%20js';

export function setResult(results) {
  return { type: SEARCH, results };
}

export function searchWiki(userInput) {
  return (dispatch) => {
    axios.get(wikiEndpoint + userInput)
      .then((response) => {
        dispatch(setResult(response.data.query.search));
      })
      .catch((err) => {
        alert(`Forbidden. Error code:${err}`);
      });
  };
}

export function setGoogleResult(results) {
  return { type: GET_GOOGLE_SUGGEST, results };
}

export function getGoogleSuggest() {
  return (dispatch) => {
    axios.get(googleSuggestEndpoint)
      .then((response) => {
        console.log(response);
        dispatch(setGoogleResult(response));
      })
      .catch((err) => {
        alert(`Forbidden. Error code:${err}`);
      });
  };
}
