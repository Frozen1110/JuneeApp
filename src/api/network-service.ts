import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import curlirize from 'axios-curlirize';
import jwt_decode from 'jwt-decode';
import Config from 'react-native-config';
import cloneDeep from 'lodash/cloneDeep';

import SecureStorage from '@junee/helpers/secureStorage';
import { AuthTokenKey } from '@junee/constants';
import DeviceInfo from 'react-native-device-info';

export const axiosTimeout = 30000;

if(__DEV__) curlirize(axios);

console.log("API_URL", Config.API_URL);


const auth = axios.create({
  baseURL: `${Config.API_URL}/client-api/`,
  timeout: axiosTimeout,
});

const client = axios.create({
  baseURL: `${Config.API_URL}/client-api/`,
  timeout: axiosTimeout,
});

const clientReqOnFullfilled = (config: AxiosRequestConfig) => {
  // Do something before request is sent
  console.log('REQ', config?.method?.toUpperCase(), config.url, config);
  return config;
};

const clientResOnFullfilled = (response: AxiosResponse) => {
  // Do something with response data
  console.log(
    'RSP',
    response?.config?.method?.toUpperCase(),
    response.config.url,
    response.data,
  );
  return response;
};

const injectDefaultHeaders = (tagetClient: AxiosInstance) => {
  tagetClient.interceptors.request.use(
    clientReqOnFullfilled,
  );
  tagetClient.interceptors.response.use(
    clientResOnFullfilled,
  );
};

injectDefaultHeaders(auth);
injectDefaultHeaders(client);

export const setToken = (token: string) => {
  const headers = cloneDeep(client.defaults.headers);
  headers.common.Authorization = `Bearer ${token}`;
  client.defaults.headers = headers;
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const checkUserToken = async () => {
  //let userToken = await SecureStorage.getItem(AuthTokenKey);
  try {
    let userToken = await SecureStorage.getItem(AuthTokenKey);
    if (!userToken) return { hasToken: false, isValidAppVersion: true };

    var decoded: any = jwt_decode(userToken);
    if (Date.now() >= decoded.exp * 1000) {
      return { hasToken: false, isValidAppVersion: true };
    }

    setToken(userToken);

    const version = DeviceInfo.getVersion();
    const response = await client.post('validate-version', version);
    const isValidAppVersion = response.data.success;
    return { hasToken: true, isValidAppVersion }

  } catch (error) {
    console.error('checkToken error', error);
    return { hasToken: false, isValidAppVersion: true };
  }
};

checkUserToken();

export default () => {
  return {
    client,
    auth,
  };
};
