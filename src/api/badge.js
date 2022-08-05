import { CrudApi } from './crud-api';

class BadgeService extends CrudApi {
  async getSkills() {
    let result = await this.get(`/skills`);
    return result.data;
  }

  async getCareerBadges() {
    let result = await this.get(`/badge-careers`);
    return result.data;
  }

  async getBadgeSkill(skill_id) {
    let result = await this.get(`/badge-skills`, { skill_id });
    return result.data;
  }

  async badgePath(badgeType, id) {
    try {
      let result = await this.get(`/s/badge-path/${badgeType}/${id}`);
      let data = result.data;
      return data;
    } catch (err) {
      console.log('error');
      return [];
    }
  }
}

export default BadgeService;
