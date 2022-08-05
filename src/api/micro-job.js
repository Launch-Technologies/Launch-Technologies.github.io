import { CrudApi } from './crud-api';

class MicroJobService extends CrudApi {
  /** GET API */
  async fetchMicroJob(params) {
    let result = await this.get(`/micro-jobs`, params);
    return result.data;
  }

  async fetchMicroJobStudent(params) {
    let result = await this.get(`/micro-job-students`, params);
    return result.data;
  }

  async fetchBadgeCareer(params) {
    let result = await this.get(`/badge-careers`, params);
    return result.data;
  }

  async fetchBadgeSkills(params) {
    let result = await this.get(`/badge-skills`, params);
    return result.data;
  }

  async fetchPathCareer(params) {
    let result = await this.get(`/badge-path-careers`, params);
    return result.data;
  }

  async fetchMicroJobBadgeSkill(params) {
    let result = await this.get(`/micro-job-badge-skills`, params);
    return result.data;
  }

  /** POST API */
  async postMicroJob(params) {
    let result = await this.post(`/micro-jobs`, params);
    return result;
  }

  async postMicroJobStudent(params) {
    let result = await this.post(`/micro-job-students`, params);
    return result;
  }

  async postMicroJobBadges(params) {
    let result = await this.post(`/micro-job-badges`, params);
    return result;
  }

  async postBadgeCareer(params) {
    let result = await this.post(`/badge-careers`, params);
    return result;
  }

  async postBadgeSkills(params) {
    let result = await this.post(`/badge-skills`, params);
    return result;
  }

  async postPathCareer(params) {
    let result = await this.post(`/badge-path-careers`, params);
    return result;
  }

  async postMicroJobBadgeSkill(params) {
    let result = await this.post(`/micro-job-badge-skills`, params);
    return result;
  }

  /** PATCH API */
  async patchMicroJob(id, params) {
    let result = await this.patch(`/micro-jobs/${id}`, params);
    return result;
  }

  async patchMicroJobStudent(id, params) {
    let result = await this.patch(`/micro-job-students/${id}`, params);
    return result;
  }

  async patchMicroJobBadges(id, params) {
    let result = await this.patch(`/micro-job-badges/${id}`, params);
    return result;
  }

  async patchBadgeCareer(id, params) {
    let result = await this.patch(`/badge-careers/${id}`, params);
    return result;
  }

  async patchBadgeSkills(id, params) {
    let result = await this.patch(`/badge-skills/${id}`, params);
    return result;
  }

  async patchPathCareer(id, params) {
    let result = await this.patch(`/badge-path-careers/${id}`, params);
    return result;
  }

  async patchMicroJobBadgeSkill(id, params) {
    let result = await this.patch(`/badge-skill-micro-job/${id}`, params);
    return result;
  }

  /** DELETE API */
  async deleteMicroJob(id, params) {
    let result = await this.delete(`/micro-job/${id}`, params);
    return result;
  }

  async deleteMicroJobStudent(id, params) {
    let result = await this.delete(`/micro-job-student/${id}`, params);
    return result;
  }

  async deleteMicroJobBadges(id, params) {
    let result = await this.delete(`/micro-job-badge/${id}`, params);
    return result;
  }

  async deleteBadgeCareer(id, params) {
    let result = await this.delete(`/badge-career/${id}`, params);
    return result;
  }

  async deleteBadgeSkills(id, params) {
    let result = await this.delete(`/badge-skill/${id}`, params);
    return result;
  }

  async deletePathCareer(id, params) {
    let result = await this.delete(`/badge-path-career/${id}`, params);
    return result;
  }

  async deleteMicroJobBadgeSkill(id, params) {
    let result = await this.delete(`/badge-skill-micro-job/${id}`, params);
    return result;
  }
}

export default MicroJobService;
