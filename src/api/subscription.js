import { CrudApi } from './crud-api';

class SubscriptionService extends CrudApi {
  async apply(coupon_code) {
    let result = await this.post(`/s/apply-coupon/${coupon_code}`);
    return result;
  }

  async addCoupon(params) {
    let result = await this.post('/coupons', params);
    return result;
  }

  async getCoupons(params) {
    let result = await this.get('/coupons', params);
    return result;
  }

  async getUserRoles(page, search = '') {
    let result = await this.get(`/s/user-roles/${page}`, { search: search });
    return result;
  }

  async updateSubscription(user_id, subscription) {
    let result = await this.post(
      `/s/user-subscriptions/${user_id}/${subscription}`
    );
    return result;
  }

  async getUserSubscription(params) {
    let result = await this.get('/user-subscriptions', params);
    return result.data;
  }

  async signUp(subscription_name) {
    let result = await this.post(`/s/apply-subscription/${subscription_name}`);
    return result;
  }

  async addUserSubscription(params) {
    let result = await this.post(`/user-subscriptions`, params);
    return result;
  }

  async editUserSubscription(id, params) {
    let result = await this.patch(`/user-subscription/${id}`, params);
    return result;
  }
}

export default SubscriptionService;
