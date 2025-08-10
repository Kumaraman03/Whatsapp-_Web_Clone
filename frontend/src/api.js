import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // change after deploy

export const fetchMessages = () => axios.get(`${API_URL}/messages`);
export const sendMessage = (data) => axios.post(`${API_URL}/send`, data);
