import { CrudApi } from './crud-api';

class TaskService extends CrudApi {
  async getTask(params) {
    let result = await this.get(`/tasks`, params);
    return result.data;
  }

  async addTask(params) {
    let result = await this.post(`/tasks`, params);
    return result;
  }

  async getStudentTask(params) {
    let result = await this.get(`/student-tasks`, params);
    return result.data;
  }

  async updateStudentTask(id, params) {
    let result = await this.patch(`/student-task/${id}`, params);
    return result;
  }
}

export default TaskService;
