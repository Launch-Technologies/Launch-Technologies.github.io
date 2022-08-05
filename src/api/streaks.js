import { CrudApi } from './crud-api';

class StreakService extends CrudApi {
  async getUserWeekStreaks(nweeks, student_id) {
    let result = await this.get(`/s/weeks-streaks/${nweeks}`, { student_id });
    return result.data;
  }
}

export default StreakService;
