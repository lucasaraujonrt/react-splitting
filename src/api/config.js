import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/users/lucasaraujonrt'
});

export default axiosInstance;
