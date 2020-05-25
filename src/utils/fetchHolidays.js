/*
 *
 *  Util: `getHolidays`.
 *
 */
import {FIREBASE_TOKEN_SERVICE} from './constants';

const getRequest = async uri => {
  const response = await fetch(uri);
  return await response.json();
};

const fetchHolidays = async () => {
  try {
    const {holidays} = await getRequest(FIREBASE_TOKEN_SERVICE);

    return holidays;
  } catch (error) {
    console.log('ERROR => ', error);
  }
};

export default fetchHolidays;
