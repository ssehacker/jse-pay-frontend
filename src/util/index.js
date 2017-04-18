/**
 * Created by ssehacker on 2017/4/18.
 */

const { hashHistory } = ReactRouter;

export const go = function (url) {
  hashHistory.push(url);
};

export * as request from './request';
