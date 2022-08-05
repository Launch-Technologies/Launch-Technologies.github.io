import request from './strapi-request';

export class StrapiCrudApi {
  get(url, params) {
    return request({
      url: url,
      method: 'GET',
      params: params,
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
      method: 'PUT',
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
