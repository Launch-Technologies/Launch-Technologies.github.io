import { CrudApi } from './crud-api';

class NotificationService extends CrudApi {
  async getNotification(student_id, params) {
    let result = await this.get(`/s/read-notification/${student_id}`, params);
    return result.data;
  }

  async readNotification(student_id, params) {
    let result = await this.patch(`/s/read-notification/${student_id}`, params);
    return result;
  }
}

export default NotificationService;
