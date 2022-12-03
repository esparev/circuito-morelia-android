import {API_HOST} from '../utils/constants';

export async function getStopsApi() {
  try {
    const url = `${API_HOST}/stops`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
