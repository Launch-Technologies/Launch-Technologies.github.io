import qs from 'qs';
import { StrapiCrudApi } from './strapi-crud-api';

class StrapiEventService extends StrapiCrudApi {
  async getEvents(params) {
    let result = await this.get(`/meetings`, params);
    return result.data;
  }

  async getEvent(id, params) {
    let result = await this.get(`/meeting/${id}`, params);
    return result.data;
  }

  async createEvents(params) {
    let result = await this.post(`/meetings`, params);
    return result;
  }

  async putEvents(id, params) {
    let result = await this.put(`/meetings/${id}`, params);
    return result;
  }
}

export default StrapiEventService;
