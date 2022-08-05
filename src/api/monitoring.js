import { CrudApi } from './crud-api';

class MonitoringService extends CrudApi {
  async getMonitorings(params) {
    let result = await this.get(`/monitorings`, params);
    return result.data;
  }

  async getCohortAnalytics(cohort_id, params = {}) {
    let result = await this.get(`s/analytics/${cohort_id}`, params);
    return result.data;
  }
}

export default MonitoringService;
