import appConifg from '../config/app';

const authProvider = {
  login: ({ email, password }) => {
    const request = new Request(`${appConifg.API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(async (response) => {
        if (response.status < 200 || response.status >= 300) {
          const resbody = JSON.parse(await response.text());
          throw new Error(resbody.message || response.statusText);
        }

        return response.json();
      })
      .then(({ accessToken }) => {
        // todo: use localStorage for remember me
        sessionStorage.setItem('token', accessToken);
      });
  },
  logout: (params) => {
    sessionStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: (params) => {
    return sessionStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },
  checkError: (error) => Promise.resolve(),
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
