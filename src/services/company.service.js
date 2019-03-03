import axios from './axios';

export default class CompanyService {

  static getCalendar = async (companyId, year, month) => {
    return axios.get(`/company/${companyId}/calendar/${year}/${month}`);
  }

}
