import { CrudApi } from './crud-api';

class CohortVideoService extends CrudApi {
  async fetchCohortVideo(params) {
    const result = await this.get('video-cohorts', params);
    return result.data;
  }

  async create(data) {
    let result = await this.post(`/video-cohorts`, data);
    return result;
  }

  async updateCohortVideo(id, params) {
    const result = await this.patch(`video-cohort/${id}`, params);
    return result;
  }
}

export default CohortVideoService;
