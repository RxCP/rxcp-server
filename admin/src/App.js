// in src/App.js
import React from 'react';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/People';
import CssBaseline from '@material-ui/core/CssBaseline';
import appConifg from './config/app';

import authProvider from './providers/authProvider';
import LoginPage from './pages/login';
import { UserList } from './list/usersList';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  const token = sessionStorage.getItem('token');

  options.headers.set('Authorization', `Bearer ${token}`);

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(appConifg.API_URL, httpClient);
const App = () => (
  <>
    <CssBaseline />
    <Admin
      loginPage={LoginPage}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource name="accounts" list={ListGuesser} icon={UserIcon} />
    </Admin>
  </>
);

export default App;
