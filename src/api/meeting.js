import { CrudApi } from './crud-api';

class MeetingService extends CrudApi {
  async getMeetings(params) {
    let result = await this.get(`/meetings`, params);
    return result.data;
  }

  async addEvent(params) {
    let result = await this.post(`/meetings`, params);
    return result;
  }

  async addMeetingApproval(params) {
    let result = await this.post(`/meeting-approvals`, params);
    return result;
  }

  async updateEvent(id, params) {
    let result = await this.patch(`/meeting/${id}`, params);
    return result;
  }

  /**
   * Event could be for Cohort or Group or Temporary Group
   * so neither cohort_id or group_id is mandatory
   * both one of them is required
   */
  async getUpcomingEvents(payload) {
    let cohort_id = payload.cohort_id;
    let group_id = payload.group_id;
    const meeting_params = payload.params ? payload.params : {};
    let result;
    let date = new Date();
    // meetings in the last 3 hours is still included
    date.setHours(date.getHours() - 3, date.getMinutes() - 30);
    const today = date.toUTCString();
    const params = {
      date__gte: today,
      ...meeting_params,
      'date__sort[0]': 'asc',
    };
    if (cohort_id) params.cohort_id = cohort_id;

    result = await this.getMeetings(params);

    const filtering = (id) => {
      let cond = false;
      if (!payload.filterWideGroup) cond = !id || id === 'None';
      if (Number(group_id)) cond = cond || Number(id) === Number(group_id);
      return cond;
    };
    if (group_id)
      result = result.filter((res) => filtering(res.group_id_target));
    return result;
  }

  async getPastEvents(cohort_id, group_id, payload) {
    let date = new Date();
    // meetings in the last 3 hours is not included
    date.setHours(date.getHours() - 3, date.getMinutes() - 30);
    const today = date.toUTCString();
    const params = { date__lt: today, ...payload, 'date__sort[0]': 'asc' };
    if (cohort_id) params.cohort_id = cohort_id;
    if (group_id) params.group_id_target = group_id;
    let result = await this.getMeetings(params);
    console.log('PAST EVENT', params, result);
    return result;
  }

  async updateEventApproval(id, params) {
    let result = await this.patch(`/meeting-approval/${id}`, params);
    return result;
  }

  async getZoomEmbedData(meeting_id, params = {}) {
    let result = await this.get(`/s/zoom/embed/${meeting_id}`, params);
    return result.data;
  }
}

export default MeetingService;
