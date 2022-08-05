import { CrudApi } from './crud-api';

class ZoneService extends CrudApi {
  async getZone(id) {
    let result = await this.get(`/zone/${id}`);
    return result.data;
  }
}

export default ZoneService;
