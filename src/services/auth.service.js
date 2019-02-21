import auth0 from 'auth0-js';
import axios from './axios';

export default class AuthService {

  static webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    responseType: 'token id_token',
    scope: 'openid email profile user_metadata',
  });

  static login = async (email, password) => {
    console.log(email, password);
  }

  static externalLogin = (provider) => {
    let connectionProvider;
    switch (provider) {
      case 'google':
        connectionProvider = 'google-oauth2';
        break;
      case 'facebook':
        connectionProvider = 'facebook';
        break;
      case 'linkedin':
        connectionProvider = 'linkedin';
        break;
      default:
        return null;
    }
    return AuthService.webAuth.authorize({
      connection: connectionProvider
    });
  }

  static externalLoginCallback = async (callbackData) => {
    const authResult = AuthService.extractHashData(callbackData);
    if (authResult && authResult.access_token && authResult.id_token) {
      AuthService.setToken(authResult.access_token, authResult.id_token);
    }
    return authResult;
  }

  static logout = () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
  }

  static storeTokenAndGetUserInfo = async (authResult) => {
    return new Promise((resolve, reject) => {
      if (authResult && authResult.access_token && authResult.id_token) {
        AuthService.setToken(authResult.access_token, authResult.id_token);
        AuthService.loadUser(authResult.access_token)
          .then(res => resolve(res))
          .catch(err => reject(err));
      } else if (authResult && authResult.error) {
        reject(authResult.error);
      }
    });
  }

  static setToken = (accessToken, idToken) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);
  }

  static getToken = () => {
    return {
      access_token: localStorage.getItem('access_token'),
      id_token: localStorage.getItem('id_token')
    };
  }

  static getUser = async (accessToken) => {
    return axios.get('/user', { headers: { 'Authorization': `Bearer ${accessToken || AuthService.getToken().access_token}` } })
  }

  static extractHashData = (hashData) => {
    return hashData
      .substr(1)
      .split('&')
      .map(v => v.split('='))
      .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {});
  }
}
