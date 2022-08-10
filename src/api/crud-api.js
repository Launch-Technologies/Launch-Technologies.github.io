import axios from 'axios';
import request from './request';

export class CrudApi {
  constructor() {
    this.cancelToken = axios.CancelToken.source();
  }

  get(url, params, cancelToken = this.cancelToken.token) {
    return request({
      url: url,
      method: 'GET',
      params: params,
      cancelToken: cancelToken,
    });
  }

  post(url, payload) {
    return request({
      url: url,
      method: 'POST',
      data: payload,
    });
  }

  patch(url, payload) {
    return request({
      url: url,
      method: 'PATCH',
      data: payload,
    });
  }

  delete(url, payload) {
    return request({
      url: url,
      method: 'DELETE',
      data: payload,
    });
  }

  request(options) {
    return request(options);
  }
}
