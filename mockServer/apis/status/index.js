/**
 * Created by ssehacker on 2017/2/20.
 */

const getPayStatus = require('./pay');
const getCheckoutStatus = require('./checkout');

module.exports = [
  getPayStatus,
  getCheckoutStatus,
];
