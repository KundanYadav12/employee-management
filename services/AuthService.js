import jwt_decode from "jwt-decode";
import axios from 'axios'; 

const login = async (username, password) => {
  const response = await axios.post('/api/auth/login', { username, password });
  const { accessToken, refreshToken } = response.data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await axios.post('/api/auth/refresh', { token: refreshToken });
  const { accessToken } = response.data;
  localStorage.setItem('accessToken', accessToken);
};

const isTokenExpired = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) return true;
  const decoded = jwt_decode(token);
  return decoded.exp * 1000 < Date.now();
};
