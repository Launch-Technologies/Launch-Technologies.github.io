const qs = require('qs');
const axios = require('axios');

const baseURL = `${process.env.REACT_APP_STRAPI_HOST}/api`;

class CohortContentService {
  constructor() {
    this.base_url = baseURL;
  }

  async getContent(slug) {
    const query = qs.stringify(
      {
        // populate: {
        //   sections: {
        //     populate: ["contents"],
        //   },
        // },
        filters: {
          slug: {
            $eq: slug,
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    // let result = await axios.get(`${this.base_url}/cohorts`, {slug: slug});
    const old_token = JSON.parse(
      window.localStorage.getItem('REACT_STRAPI_TOKEN_AUTH_KEY')
    );
    const result = await axios.get(`${this.base_url}/cohorts?${query}`, {
      headers: {
        AUTHORIZATION: `Bearer ${old_token?.jwt}`,
      },
    });
    if (result.status === 200) {
      // const data = result.data.data[0];
      // const attributes = data.attributes;
      // let sections = attributes.sections.data;
      // sections.sort((a, b) =>
      //   a.attributes.order > b.attributes.order ? 1 : -1
      // );

      // return sections;
      return result.data;
    } else {
      return;
    }
  }
}

export default CohortContentService;
