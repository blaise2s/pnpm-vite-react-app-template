import axios from 'axios';

const createAxiosInstance = (version: string) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL as string;
  if (!baseURL) {
    throw new Error('[api>createAxiosInstance] VITE_API_BASE_URL is required');
  }

  return axios.create({
    baseURL: `${baseURL}/${version}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

// TODO: Alter your axios instance configuration as needed...
// - Add interceptors for requests and responses
// - headers, auth checks, refresh tokens, etc.
// If we develop a more hardened pattern for this interaction
// we'll commit the changes to the repo.
const APIv1 = createAxiosInstance('v1');
const APIv2 = createAxiosInstance('v2');

export { APIv1, APIv2 };
