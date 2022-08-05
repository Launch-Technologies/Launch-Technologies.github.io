import { CrudApi } from './crud-api';

export default class EventService extends CrudApi {
  async getEventClass(id, params) {
    let result = await this.get(`/cohort-event-class/${id}`, params);
    return result.data;
  }

  async getEventClasses(params) {
    let result = await this.get(`/cohort-event-classes`, params);
    return result.data;
  }

  async getEventInstances(params) {
    let result = await this.get(`/cohort-event-instances`, params);
    return result.data;
  }

  async getEventAttendees(params) {
    let result = await this.get(`/cohort-event-attendees`, params);
    return result.data;
  }

  async createEventClass(params) {
    let result = await this.post(`/cohort-event-classes`, params);
    return result;
  }

  async createEventInstance(params) {
    let result = await this.post(`/cohort-event-instances`, params);
    return result;
  }

  async createEventAttendees(params) {
    let result = await this.post(`/cohort-event-attendees`, params);
    return result;
  }

  async updateEventInstance(id, params) {
    let result = await this.patch(`/cohort-event-instance/${id}`, params);
    return result;
  }

  async deleteEventClass(id, params) {
    let result = await this.delete(`/s/cohort-event-classes/${id}`, params);
    return result;
  }
}
