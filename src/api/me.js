import api from './config';

export default class me {
  static async meGithub(parameters) {
    const instance = await api();
    console.log(instance);
    return instance;
  }
}