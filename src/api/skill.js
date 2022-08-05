import { CrudApi } from './crud-api';

class SkillService extends CrudApi {
  async getSkill(params = {}) {
    let result = await this.get(`/skills`, params);
    return result.data;
  }

  async getCohortSkill(cohort_id) {
    // const query = qs.stringify(
    //   {
    //     // cohort_id: cohort_id,
    //     populate: {
    //       sections: {
    //         populate: ["skills"],
    //       },
    //     },
    //     filters: {
    //       cohort_id: {
    //         $eq: cohort_id,
    //       },
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );
    // let result = await this.get(`/skill-cohorts/${query}`,);

    let result = await this.get(`/s/cohorts-skills/${cohort_id}`);
    return result.data;
  }
}

export default SkillService;
