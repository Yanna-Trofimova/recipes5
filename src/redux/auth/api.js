import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

const tokenOperation = {
  setToken: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearToken: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/register', user);
    tokenOperation.setToken(data.token);

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
export const signinApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', user);
    tokenOperation.setToken(data.token);

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
export const logoutApi = async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
export const currentApi = async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    tokenOperation.setToken(persistedToken);
    const { data } = await axios.get('/users/current');

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
