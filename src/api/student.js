import { CrudApi } from './crud-api';

class StudentService extends CrudApi {
  async update(student_id, data) {
    let result = await this.patch(`/student/${student_id}`, data);
    return result;
  }

  async getById(student_id) {
    let result = await this.get(`/student/${student_id}`);
    return result;
  }

  async getStudents(params) {
    let result = await this.get('/students', params);
    return result;
  }

  async getStudentSkills(params) {
    let result = await this.get('/student-skills', params);
    return result.data;
  }

  async addStudentSkills(params) {
    let result = await this.post('/student-skills', {
      instances: params,
    });
    return result;
  }

  async createUpdateStudentSkills(params) {
    let result = await this.post('s/student-skills', params);
    return result;
  }

  async fetchStudentBadges(params) {
    let result = await this.get('/student-badges', params);
    return result.data;
  }
}

export default StudentService;
