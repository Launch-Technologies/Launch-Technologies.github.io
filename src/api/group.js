import { isObjectEmpty } from 'helper';
import { CrudApi } from './crud-api';
import StudentService from './student';

/**
 * NOTES:
 * note that terms Group and Team are the same, used interchangeably
 * previously named Group but then called Team in the UI as we add feature
 *
 */
class GroupService extends CrudApi {
  constructor() {
    super();
    this.studentService = new StudentService();
    this.group_endpoint = '/group';
    this.group_std_endpoint = '/student-group';
  }

  async getGroup(cohort_id, student_id, params = {}) {
    if (cohort_id) params.cohort_id = cohort_id;
    if (student_id) params.student_group__student_id = student_id;
    let result = await this.get(`${this.group_endpoint}s`, params);
    return result.data;
  }

  async getGroups(params = {}) {
    let result = await this.get(`${this.group_endpoint}s`, params);
    return result.data;
  }

  async createGroup(params) {
    let result = await this.post(`${this.group_endpoint}s`, params);
    return result;
  }

  async createStudentGroup(params = {}) {
    const result = await this.post(`${this.group_std_endpoint}s`, params);
    return result;
  }

  /** note that name getStudentGroup is already used for another purpose */
  async fetchStudentGroup(params = {}) {
    let result = await this.get(`${this.group_std_endpoint}s`, params);
    return result.data;
  }

  async getStudentGroup(group_id, params = {}) {
    // let result = await this.studentService.getStudents({
    //   student_group__group_id: group_id,
    //   ...params
    // });
    let result = await this.fetchStudentGroup({
      group_id: group_id,
      ...params,
      populate: 'student',
    });
    result = result.map((rs) => {
      return {
        ...rs.student,
        student_group_id: rs.id,
        created_on: rs.created_on,
        updated_on: rs.updated_on,
      };
    });
    return result;
  }

  async getLeader(leader_id) {
    let result = await this.studentService.getById(leader_id);
    return result.data;
  }

  async getTeam(cohort_id, student_id) {
    let result = { me: {}, leader: {}, other_member: [], group: {} };
    let not_other_member_id = [student_id];
    let group = await this.getGroup(cohort_id, student_id);

    if (isObjectEmpty(group)) {
      return {};
    }
    group = group[0];
    result.group = group;

    let members = await this.getStudentGroup(group.id);
    if (!isObjectEmpty(group.leader_id)) {
      not_other_member_id.push(group.leader_id);
      result.leader = await this.getLeader(group.leader_id);
    }

    result.other_member = members.filter(
      (m) => !not_other_member_id.includes(m.id)
    );
    result.me = members.filter((m) => m.id === student_id)[0];
    return result;
  }

  async update(group_id, payload) {
    let result = await this.patch(
      `${this.group_endpoint}/${group_id}`,
      payload
    );
    return result;
  }

  async updateStudentGroup(std_group_id, payload) {
    let result = await this.patch(
      `${this.group_std_endpoint}/${std_group_id}`,
      payload
    );
    return result;
  }

  async updateGroupChannelName(payload) {
    let result = await this.patch(`s${this.group_endpoint}/name`, payload);
    return result;
  }

  async updateLeader(group_id, payload) {
    payload.group_id = group_id;
    let result = await this.post(`s/group-leader`, payload);
    return result;
  }

  async getServerDiscordLink(cohort_id) {
    let result = await this.get(`s/group/discord-server/${cohort_id}`, {});
    return result?.data || {};
  }

  async getEventsDiscordLink(cohort_id, discord_channel_id) {
    let result = await this.get(
      `s/group/discord/${cohort_id}/${discord_channel_id}`,
      {}
    );
    return result?.data || {};
  }

  async deleteGroup(group_id) {
    let result = await this.delete(`s/group/${group_id}`);
    return result;
  }

  async deleteStudentGroup(group_id) {
    let result = await this.delete(`${this.group_std_endpoint}/${group_id}`);
    return result;
  }

  async deleteStudentGroupByParams(params = {}) {
    const stdGroup = await this.get(`${this.group_std_endpoint}s`, params);
    if (stdGroup.status !== 'Ok')
      return { status: 'Not Ok', message: 'Student Group not found' };
    const id = stdGroup.data[0].id;
    let result = await this.delete(`${this.group_std_endpoint}/${id}`);
    return result;
  }
}

export default GroupService;
