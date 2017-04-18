/**
 * Created by ssehacker on 2017/2/20.
 */
module.exports = {
  method: 'GET',
  url: '/status/checkout',
  data: {
    status: 'holding',  // 'holding', 'finished', 'init'
  },
};