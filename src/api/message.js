import { isObjectEmpty } from 'helper';
import { CrudApi } from './crud-api';
import StudentService from './student';

export default class MessageService extends CrudApi {
  constructor() {
    super();
    this.endpoint = '/message';
  }

  async fetchMessages(params) {
    let result = await this.get(`${this.endpoint}s`, params);
    return result.data;
  }
}
