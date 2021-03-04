import axios from 'axios'

const api = axios.create({
   baseURL: process.env.REACT_APP_API_URL 
});

export const storeUrl = payload => api.post('/url', payload);
export const getUrl = shortUrl => api.get(`/url/${shortUrl}`);

const apis = {
    storeUrl,
    getUrl
};

export default apis;