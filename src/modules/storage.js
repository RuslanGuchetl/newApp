import AsyncStorage from '@react-native-community/async-storage';

const Storage = {
  get: (key) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!key) {
          reject && reject('Missing required parameter - key');
        }
        let data = await AsyncStorage.getItem(key);
        if (data) {
          data = JSON.parse(data);
          resolve && resolve(data);
        } else {
          reject && reject('No data');
        }
      } catch (e) {
        console.warn('Storage Error in getting value: ', e);
        reject && reject(e);
      }
    })
  },
  set: (key, value) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!key || !value) {
          reject && reject('Missing required parameters');
        }
        const data = JSON.stringify(value);
        await AsyncStorage.setItem(key, data);
        resolve && resolve();
      } catch (e) {
        console.warn('Storage Error in setting value: ', e);
        reject && reject(e);
      }
    })
  },
  removeItem: (key) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!key) {
          reject && reject('Missing required parameter - key');
        }
        await AsyncStorage.removeItem(key);
        resolve && resolve();
      } catch (e) {
        console.warn('Storage Error while clearing storage: ', e);
        reject && reject(e);
      }
    })
  },
  clear: () => {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.clear();
        resolve && resolve();
      } catch (e) {
        console.warn('Storage Error while clearing storage: ', e);
        reject && reject(e);
      }
    })
  }
};

export default Storage;
