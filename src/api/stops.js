import {envConfig} from '../utils/config';

export async function getStopsApi() {
  try {
    const url = `${envConfig.apiUrl}/stops`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
