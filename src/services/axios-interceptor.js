import axios from 'axios';
import { APP_API_URL } from '../links/'

axios.defaults.baseURL = APP_API_URL;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.Accept = 'application/json';



export default axios;