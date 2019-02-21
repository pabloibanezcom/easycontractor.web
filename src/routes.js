import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import getCompanyPages from './pages';

const asyncLogin = asyncComponent(() => {
  return import('./containers/Login/Login');
}, 'login');

const asyncExternalLogin = asyncComponent(() => {
  return import('./containers/ExternalLogin/ExternalLogin');
});

const asyncComponents = {
  calendar: asyncComponent(() => {
    return import('./containers/Company/Calendar/Calendar');
  }, 'main'),
  overview: asyncComponent(() => {
    return import('./containers/Company/Overview/Overview');
  }, 'main'),
  clients: asyncComponent(() => {
    return import('./containers/Company/Clients/Clients');
  }, 'main'),
  invoices: asyncComponent(() => {
    return import('./containers/Company/Invoices/Invoices');
  }, 'main')
}

const asyncProfile = asyncComponent(() => {
  return import('./containers/Profile/Profile');
}, 'main');

const routes = (
  <Switch>
    <Route path="/login" component={asyncLogin} />
    <Route path="/auth/external" component={asyncExternalLogin} />
    {getCompanyPages().map(page => asyncComponents[page.key] && <Route key={page.key} path={`/company/:companyUrl${page.url}`} component={asyncComponents[page.key]} />)}
    <Route path="/profile" component={asyncProfile} />
    <Route exact path="/company/:companyUrl" render={(props) => (<Redirect to={`/company/${props.match.params.companyUrl}/overview`} />)} />
    <Redirect to="/login/" />
  </Switch>
);

export default routes;