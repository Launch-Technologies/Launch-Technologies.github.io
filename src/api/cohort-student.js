import { CrudApi } from './crud-api';

class CohortStudentService extends CrudApi {
  async fetchStudentCohort(params) {
    let result = await this.get(`/student-cohorts`, params);
    return result.data;
  }

  async studentJoin(student_id, cohort_id) {
    let result = await this.post('student-cohorts', {
      student_id,
      cohort_id,
    });
    return result;
  }

  async studentJoinWithToDo(student_id, cohort_id) {
    let result = await this.post('s/student-join-cohorts', {
      student_id,
      cohort_id,
    });
    return result;
  }

  async update(student_cohort_id, data) {
    let result = await this.patch(`/student-cohort/${student_cohort_id}`, data);
    return result;
  }
}

export default CohortStudentService;
