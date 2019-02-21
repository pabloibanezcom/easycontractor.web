import axios from './axios';

export default class SettingsService {

  static getSettings = async () => {
    return axios.get('/settings');
  }

  static updateSettings = async (settings) => {
    return axios.put('/settings', settings);
  }

}
