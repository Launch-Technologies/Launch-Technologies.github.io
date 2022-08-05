import { CrudApi } from './crud-api';

class CohortService extends CrudApi {
  getCohor(params) {
    return this.post('/cohort', {
      CREATE: 0,
      ...params,
    });
  }

  getUserCohort() {}

  getAllCohort() {
    return this.post('/cohort', {
      all: 1,
      CREATE: 0,
    });
  }
}

export default CohortService;
