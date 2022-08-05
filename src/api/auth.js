import { v4 as uuidv4 } from 'uuid';
import { login, logout, updateUserTokenOnly } from '../auth';
import { CrudApi } from './crud-api';

class AuthService extends CrudApi {
  /**
   * @returns The token object.
   */
  async login(data) {
    try {
      let token = await this.post('/login', data);
      if (token.hasOwnProperty('access_token')) {
        login(token);
        return token;
      } else {
        console.log('Fail to login', token);
        return token;
      }
    } catch (e) {
      return e;
    }
  }

  /**
   * Create a user
   * @param email - The email address of the user.
   * @param password - The password for the user.
   * @param name - The name of the user.
   * @returns The user object.
   */
  create_user(email, password, name) {
    return this.post('/user', {
      CREATE: 1,
      email: email,
      password,
      name: name || '',
      ID: uuidv4(),
      username: email,
    });
  }

  /**
   * It register user.
   * @param email - The email address of the user.
   * @param password - The password to be used for the new user.
   * @returns The return value is a boolean.
   */
  async register(data) {
    try {
      await this.post('/register', data);
      const token = await this.login(data);
      return token;
    } catch (err) {
      logout();
      return {};
    }
  }

  async request_verify_email(email, name) {
    try {
      const response = await this.post('/register/verify', {
        email,
        name,
      });
      return response;
    } catch (err) {
      return {};
    }
  }

  async refresh_token() {
    try {
      const response = await this.post('/refresh', {});
      return response;
    } catch (err) {
      // if 401 logout
      if (err.status === 401) logout();
      return {};
    }
  }

  async send_email_link(params) {
    try {
      const response = await this.post('/password/reset/link', params);
      return response;
    } catch (err) {
      return {};
    }
  }

  async set_new_password(params) {
    try {
      const response = await this.post('/password/reset', params);
      return response;
    } catch (err) {
      return {};
    }
  }

  async check_auth(params, with_refresh = true) {
    try {
      const response = await this.get('/auth-check', params);
      return response;
    } catch (err) {
      if (err.status === 401) {
        const refresh = await this.refresh_token();
        updateUserTokenOnly({ access_token: refresh.access_token });
      }
      return {};
    }
  }
}

export default AuthService;
