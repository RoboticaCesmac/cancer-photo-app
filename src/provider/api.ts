import Axios from 'axios';
import { ENV } from '../config/env';

const api = Axios.create({
    baseURL: ENV.API_URL
});

export default api;