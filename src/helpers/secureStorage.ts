import SensitiveInfo from 'react-native-sensitive-info';

const configuration = {};

const setItem = (key: string, value: any) =>
  SensitiveInfo.setItem(key, value, configuration);

const getItem = (key: string) => SensitiveInfo.getItem(key, configuration);

const removeItem = (key: string) =>
  SensitiveInfo.deleteItem(key, configuration);

export default {
  setItem,
  getItem,
  removeItem,
};
