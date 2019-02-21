import axios from './axios';

export default class ClientsService {

  static searchClients = async (searchObj) => {
    return axios.post('/client/search', searchObj);
  }

  static getClient = async (clientId) => {
    return axios.get(`/client/${clientId}`);
  }

  static addClient = async (client) => {
    return axios.post('/client/', client);
  }

  static editClient = async (clientId, client) => {
    return axios.put(`/client/${clientId}`, client);
  }

  static deleteClient = async (clientId) => {
    return axios.delete(`/client/${clientId}`);
  }

  static searchInvoices = async (searchObj) => {
    return axios.post('/invoice/search', searchObj);
  }

  static getInvoice = async (invoiceId) => {
    return axios.get(`/invoice/${invoiceId}`);
  }

  static addInvoice = async (invoice) => {
    return axios.post('/invoice/', invoice);
  }

  static editInvoice = async (invoiceId, invoice) => {
    return axios.put(`/invoice/${invoiceId}`, invoice);
  }

  static deleteInvoice = async (invoiceId) => {
    return axios.delete(`/invoice/${invoiceId}`);
  }

}
