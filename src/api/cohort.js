import { CrudApi } from './crud-api';

class CohortService extends CrudApi {
  async getUserCohort(student_id, sort = {}) {
    let result = await this.get(`/cohorts`, {
      student_cohort__student_id: student_id,
      ...sort,
      is_live: true,
    });
    return result.data;
  }

  async getCohort(slug) {
    let result = await this.get(`/cohort/${slug}`);
    return result.data;
  }

  async getAllCohort(sort = {}) {
    let result = await this.get('/cohorts', { is_live: true, ...sort });
    return result.data;
  }

  async fetchAllCohort(params = {}) {
    let result = await this.get('/cohorts', params);
    return result.data;
  }

  async patch(id, params = {}) {
    let result = await this.patch(`/cohort/${id}`, params);
    return result.data;
  }
}

export default CohortService;
