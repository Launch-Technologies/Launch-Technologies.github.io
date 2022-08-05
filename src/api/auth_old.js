import { v4 as uuidv4 } from 'uuid';
import { login, logout } from '../auth';
import { CrudApi } from './crud-api';

class AuthService extends CrudApi {
  /**
   * Get a user by ID
   * @param ID - The ID of the user you want to get.
   * @returns The user object.
   */
  getUser(ID) {
    let data = this.post('/user', {
      CREATE: 0,
      ID,
    });
    return data;
  }

  /**
   * It logs in the user and returns the token.
   * @param email - The email of the user.
   * @param password - The password of the user.
   * @returns The token object.
   */
  async login(email, password) {
    let token = await this.post('/auth', {
      username: email,
      password,
    });
    console.log('token', token);
    if (token.access_token && token.std_id) {
      login(token);
      const userData = await this.getUser(token.std_id);
      token = { ...token, ...userData[0] };
      return token;
    } else {
      logout();
      console.log('Fail to login');
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
  async register(email, password) {
    try {
      const base_user = 'paul4000@gmail.com';
      const base_pass = 'password';

      await this.login(base_user, base_pass);
      await this.create_user(email, password);
      const userData = await this.login(email, password);
      login(userData);
      return true;
    } catch (err) {
      logout();
      console.log(err);
      return false;
    }
  }
}

export default AuthService;
