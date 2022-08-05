import { StrapiCrudApi } from './strapi-crud-api';

class StrapiCohortService extends StrapiCrudApi {
  async getCohorts(params) {
    let result = await this.get(`/cohorts`, params);
    return result.data;
  }

  async getCohort(slug, params = {}) {
    let result = await this.get(`/cohorts`, { slug: slug, ...params });
    return result.data[0];
  }

  async getCohortById(id) {
    let result = await this.get(`/cohort/${id}`);
    return result.data;
  }

  async createCohorts(params) {
    let result = await this.post(`/cohorts`, params);
    return result;
  }

  async putCohorts(id, params) {
    let result = await this.put(`/cohorts/${id}`, params);
    return result;
  }
}

export default StrapiCohortService;
