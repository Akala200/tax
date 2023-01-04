/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
import bcrypt from 'bcrypt';
import { signToken } from '../utils/storeToken';
import tracelogger from '../logger/tracelogger';
import responses from '../utils/responses';
import User from '../model/User';
import taxCalc from '../utils/calculateTax';
import config from '../config/index';

/**
 * @description Defines the actions to for the users endpoints
 * @class CalculateTaxController
 */
class CalculateTaxController {
  /**
   *@description calculate account
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and created wallet
   *@memberof CalculateTaxController
   */

  static async calculate(req, res) {
    const { income, email } = req.query;
    let percentage = 0;


    try {
      const user = await User.findOne({ email });
      if (income < 300000 && income < 50001) {
        percentage = 7;
      } else if (income < 500000) {
        percentage = 15;
      } else if (income < 1600000) {
        percentage = 21;
      } else if (income >= 3200000) {
        percentage = 24;
      } else {
        percentage = 0;
      }

      if (user && income < 1600000) {
        const prev_amount = user.amount;
        switch (prev_amount) {
          case 300000:
            percentage = 11;
            break;
          case 500000:
            percentage = 19;
            break;
          default:
            percentage = 11;
            break;
        }
        const tax = await taxCalc(income, percentage);
        return res
          .status(200)
          .json(responses.success(200, 'Tax calculated', tax));
      } else {
        const data = {
          email,
          amouunt: income
        };

        const user = await User.create(data);
        if (user) {
          const tax = await taxCalc(income, percentage);
          return res
            .status(200)
            .json(responses.success(200, 'Tax calculated', tax));
        }
      }
    } catch (error) {
      tracelogger(error);
      return res
        .status(500)
        .json(responses.error(500, { msg: 'Server error' }));
    }
  }
}

export default CalculateTaxController;
