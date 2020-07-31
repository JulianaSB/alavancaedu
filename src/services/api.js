import axios from 'axios';

const api = axios.create({
    baseURL: 'http://alavancaedu.online',
})

export default api;