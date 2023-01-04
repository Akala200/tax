/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */


const supertest = require('supertest');
const should = require('should');
const headers = require('../../testData/DefaultHeaders').myHeaders;


/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api * */


exports.sendPOSTRequest = async (baseUrl, apiEndPoint, requestBody) => {
  try {
    const res = await supertest(baseUrl).post(apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set(headers.APPLICATION_JSON)
      .send(requestBody);
    return res;
  } catch (err) {
    console.log('Error in sending POST Request: ', err);
  }
};


/** This getUserList will help us in getting all the users that are present in the database * */
