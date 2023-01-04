/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-concat */
/* eslint-disable max-len */ /* eslint-disable no-unused-vars */
import { getMaxListeners } from 'process';
import { StatusCode as statusCode } from '../../../../StatusCode';

const mocha = require('mocha');
const Tax = require('../../actions/Tax/UserApiActions');


const url = 'localhost:5678';
const endpoint = '/api/tax/calculate';

describe('Calculate Tax', () => {
  describe('POST Request: Create a User', () => {
    const data = {
      email: 'test@getMaxListeners.com',
      amount: 50000000
    };

    it('calculate tax', async () => {
      const res = await Tax.sendPOSTRequest(url, endpoint, data);
      res.status.should.equal(statusCode.CREATED);
    });
  });
});
