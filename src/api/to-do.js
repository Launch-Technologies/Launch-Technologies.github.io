import { CrudApi } from './crud-api';

class ToDoService extends CrudApi {
  async getTodos(params) {
    let result = await this.get(`/to-dos`, params);
    return result.data;
  }

  async getEventTodos(params) {
    let result = await this.get(`/cohort-event-to-dos`, params);
    return result.data;
  }

  async addToDo(params) {
    let result = await this.post(`/to-dos`, params);
    return result;
  }

  async addEventTodos(params) {
    let result = await this.post(`/cohort-event-to-dos`, params);
    return result;
  }

  async getStudentTodos(params) {
    let result = await this.get(`/student-to-dos`, params);
    return result.data;
  }

  async updateStudentToDo(id, params) {
    let result = await this.patch(`/student-to-do/${id}`, params);
    return result;
  }

  async studentUpdateToDo(student_id, todo_id, bio, completed) {
    let result = await this.post('s/student-cohort-bio', {
      student_id,
      todo_id,
      bio: bio,
      completed: completed,
    });
    return result.data;
  }

  async getStudentsBio(cohort_id) {
    let result = await this.get(`s/temporary-cohort-bio/${cohort_id}`, {});
    return result.data;
  }
}

export default ToDoService;
