import { API_ENDPOINT } from './Constants';

export default class Helper {

  /**
   * Makes a fetch request to a specified url
   * @return {Promise} The fetch promise object
   */
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

  /**
   * Calculates the total sum of all items in aray
   * @param {number[]} number array of numbers
   * @return {number} The sum of an array of numbers
   */
  static getSum = priceArr => priceArr.reduce((a, b) => a + b);

  /**
   * Calculates the average of all items in aray
   * @param {number[]} number array of numbers
   * @return {number} The average of an array of numbers
   */
  static getAverage = priceArr => (priceArr.reduce((a, b) => a + b, 0) / priceArr.length); 

}