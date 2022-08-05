import { CrudApi } from './crud-api';

class TimeZoneService extends CrudApi {
  constructor() {
    super();
    this.endpoint = '/s/timezone';
  }

  async getTimeZone() {
    let result = await this.get(this.endpoint);
    return result;
  }

  async setTimeZone(lng, lat, city = null) {
    let result = await this.post(this.endpoint, {
      lng,
      lat,
      city,
    });
    return result;
  }
}

export default TimeZoneService;
