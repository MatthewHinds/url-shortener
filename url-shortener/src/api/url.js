import axios from 'axios'

const api = axios.create({
   baseURL: process.env.REACT_APP_API_URL 
});

export const createUrl = payload => api.post('/url', payload);

const apis = {
    createUrl
};

export default apis;