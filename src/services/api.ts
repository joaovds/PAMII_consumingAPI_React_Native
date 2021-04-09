import axios from 'axios';
import { OMDb_API_KEY } from '../../variables';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${OMDb_API_KEY}`,
});

export default api;
