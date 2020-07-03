import { API_ENDPOINT } from './Constants';

export default class Helper {

  static makeRequest = (page, successCB, errorCB, finallyCB) => {

    const fetchConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    };

    return fetch(page ? page : API_ENDPOINT, fetchConfig)
      .then(Response => {
        if (!Response.ok) return Promise.reject(Response);
        return Response.json();
      })
      .then(json => successCB(json))
      .catch(Response => {
        if (Response.text) return Response.text();
      })
      .then(text => {
        if (text !== undefined) errorCB(text);
      })
      .finally(() => finallyCB());

  }

  static getSum = priceArr => priceArr.reduce((a, b) => a + b);

  static getAverage = priceArr => (priceArr.reduce((a, b) => a + b, 0) / priceArr.length); 

}